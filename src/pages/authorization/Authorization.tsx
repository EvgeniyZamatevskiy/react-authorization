import React, { FC, useState } from 'react'
import { AUTH } from 'api'
import { AuthorizedUserType } from 'App'
import { EMPTY_STRING } from 'constants/base'
import { Path } from 'enums'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { Nullable, ReturnComponentType } from 'types'
import style from './Authorization.module.css'
import { StyledButton } from 'styled'

export type LoginParamsType = {
	login: string
	password: string
	rememberMe: boolean
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
		mode: 'onChange',
	},
	)

	const emailValidation = {
		required: 'Обязательное поле',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Неправильный электронный адрес',
		}
	}

	const passwordValidation = {
		required: 'Обязательное поле',
	}

	const resetErrorMessage = (): void => {
		if (errorMessage) {
			setErrorMessage(EMPTY_STRING)
		}
	}

	const onLoginChange = (): void => resetErrorMessage()

	const onPasswordChange = (): void => resetErrorMessage()

	const onRememberMeChange = (): void => resetErrorMessage()

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
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>

			{errorMessage &&
				<div className={style.errorMessageContainer}>
					<span>!</span><div className={style.errorMessage}>{errorMessage}</div>
				</div>}

			<span className={style.loginText}>Логин</span>
			<input className={`${style.loginField} ${errors?.login && style.errorBorderField}`} type='text'
				{...register('login', emailValidation)} onChange={onLoginChange} />
			{errors?.login && <p className={style.errorMessageField}>{errors?.login.message}</p>}

			<span className={style.passwordText}>Пароль</span>
			<input className={`${style.passwordField} ${errors?.password && style.errorBorderField}`} type='password'
				{...register('password', passwordValidation)} onChange={onPasswordChange} />
			{errors?.password && <p className={style.errorMessageField}>{errors?.password.message}</p>}

			<label className={style.label}>
				<input className={style.rememberMe} type='checkbox' {...register('rememberMe')} onChange={onRememberMeChange} />
				Запомнить пароль
			</label>

			<StyledButton type='submit' mt='40px' disabled={isDisabled}>Войти</StyledButton>

		</form>
	)
}
