import { AuthorizedUserType } from 'App'
import { Path } from 'enums'
import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Nullable, ReturnComponentType } from 'types'

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
		<div>
			Здравствуйте, {login}

			<button onClick={onLogOutClick}>Выйти</button>
		</div>
	)
}
