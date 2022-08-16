import React, { FC } from 'react'
import { AuthorizedUserType } from 'App'
import { Path } from 'enums'
import { Navigate } from 'react-router-dom'
import { Nullable, ReturnComponentType } from 'types'
import style from './Profile.module.css'
import { StyledButton, StyledFlex } from 'styled'

type ProfilePropsType = {
	authorizedUser: Nullable<AuthorizedUserType>
	isAuth: boolean
	setIsAuth: (auth: boolean) => void
}

export const Profile: FC<ProfilePropsType> = ({ authorizedUser, isAuth, setIsAuth }): ReturnComponentType => {

	const login = authorizedUser?.login

	const onLogOutClick = (): void => setIsAuth(false)

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<StyledFlex direction='column' align='center'>
			<div className={style.greeting}>Здравствуйте, <span>{login}</span></div>
			<StyledButton mt='50px' width='200px' backgroundColor='#F5F5F5' color='#000' onClick={onLogOutClick}>Выйти</StyledButton>
		</StyledFlex>
	)
}
