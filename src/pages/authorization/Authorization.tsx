import { AUTH } from 'api'
import { AuthorizedUserType } from 'App'
import { EMPTY_STRING } from 'constants/base'
import { Path } from 'enums'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { Nullable, ReturnComponentType } from 'types'

export type LoginParamsType = {
	login: string
	password: string
}

type AuthorizationPropsType = {
	isAuth: boolean
	setAuthorizedUser: (authorizedUser: Nullable<AuthorizedUserType>) => void
	setIsAuth: (isAuth: boolean) => void
}

export const Authorization: FC<AuthorizationPropsType> = ({ setAuthorizedUser, setIsAuth, isAuth }): ReturnComponentType => {

	const [errorMessage, setErrorMessage] = useState<string>(EMPTY_STRING)
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const { register, handleSubmit, formState: { errors } } = useForm<LoginParamsType>({
		mode: 'onBlur',
	},
	)

	const emailValidation = {
		required: 'Field is required!',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Incorrect email!',
		}
	}

	const passwordValidation = {
		required: 'Field is required!',
	}

	const login = async (login: string, password: string) => {

		setIsDisabled(true)

		try {
			const response: any = await AUTH.login(login, password)
			const authorizedUser = response.data

			setAuthorizedUser(authorizedUser)
			setIsAuth(true)
			setIsDisabled(false)

			if (errorMessage) {
				setErrorMessage(EMPTY_STRING)
			}
		} catch (error: any) {
			setErrorMessage(error.message)
			setIsDisabled(false)
		}
	}

	const onSubmit: SubmitHandler<LoginParamsType> = (data): void => {
		login(data.login, data.password)
	}

	if (isAuth) {
		return <Navigate to={Path.PROFILE} />
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>

				<input type='text' placeholder='Логин'
					{...register('login', emailValidation)} />
				{errors?.login && <p>{errors?.login.message}</p>}

				<input type='text' placeholder='Пароль'
					{...register('password', passwordValidation)} />
				{errors?.password && <p>{errors?.password.message}</p>}

				<button type='submit' disabled={isDisabled}>Войти</button>

				{errorMessage && <h3>{errorMessage}</h3>}
			</form>
		</>
	)
}
