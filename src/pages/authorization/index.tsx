import React, { FC, useState } from 'react'
import { AUTH } from 'api'
import { EMPTY_STRING } from 'constants/base'
import { Path } from 'enums'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { Button } from 'styles'
import { AuthorizationPropsType, LoginParamsType } from './types'
import {
	FormContainer,
	Ellipse,
	Input,
	ErrorServerContainer,
	ErrorServerMessage,
	ErrorMessageText,
	Label,
	Checkbox,
	Span
} from './styled'

export const Authorization: FC<AuthorizationPropsType> = ({ setAuthorizedUser, setIsAuth, isAuth }): ReturnComponentType => {

	const [errorServerMessage, setErrorServerMessage] = useState<string>(EMPTY_STRING)
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const { register, handleSubmit, formState: { errors } } = useForm<LoginParamsType>({
		mode: 'onBlur',
	},
	)

	const emailSettings = {
		required: 'Обязательное поле',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Неправильный электронный адрес',
		}
	}

	const passwordSettings = {
		required: 'Обязательное поле',
		minLength: { value: 3, message: 'Минимум 3 символа' },
	}

	const resetErrorServerMessage = (): void => {
		if (errorServerMessage) {
			setErrorServerMessage(EMPTY_STRING)
		}
	}

	const onLoginChange = (): void => resetErrorServerMessage()

	const onPasswordChange = (): void => resetErrorServerMessage()

	const login = async (login: string, password: string) => {

		setIsDisabled(true)

		try {
			const response: any = await AUTH.login(login, password)
			const authorizedUser = response.data

			setAuthorizedUser(authorizedUser)
			setIsAuth(true)
			setIsDisabled(false)

			if (errorServerMessage) {
				setErrorServerMessage(EMPTY_STRING)
			}
		} catch (error: any) {
			setErrorServerMessage(error.message)
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
		<FormContainer onSubmit={handleSubmit(onSubmit)}>

			{errorServerMessage &&
				<ErrorServerContainer>
					<Ellipse>!</Ellipse>
					<ErrorServerMessage>{errorServerMessage}</ErrorServerMessage>
				</ErrorServerContainer>}

			<Span mt='27px'>Логин</Span>
			<Input type='text' border={errors?.login && '1px solid #E26F6F'} color={errors?.login && '#E26F6F'}
				{...register('login', emailSettings)} onChange={onLoginChange} />
			{errors?.login && <ErrorMessageText>{errors?.login.message}</ErrorMessageText>}

			<Span mt='20px'>Пароль</Span>
			<Input type='password' border={errors?.password && '1px solid #E26F6F'} color={errors?.password && '#E26F6F'}
				{...register('password', passwordSettings)} onChange={onPasswordChange} />
			{errors?.password && <ErrorMessageText>{errors?.password.message}</ErrorMessageText>}

			<Label>
				<Checkbox type='checkbox' />
				Запомнить пароль
			</Label>

			<Button type='submit' mt='40px' disabled={isDisabled}>Войти</Button>

		</FormContainer>
	)
}
