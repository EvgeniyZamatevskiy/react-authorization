import React, { FC } from 'react'
import { Path } from 'enums'
import { Navigate } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { Button, Span } from 'styles'
import { Greeting, ProfileContainer } from './styled'
import { ProfilePropsType } from './types'

export const Profile: FC<ProfilePropsType> = ({ authorizedUser, isAuth, setIsAuth, setAuthorizedUser }): ReturnComponentType => {

	const login = authorizedUser?.login

	const onLogOutClick = (): void => {
		setIsAuth(false)
		setAuthorizedUser(null)
	}

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<ProfileContainer direction='column' align='center'>
			<Greeting>Здравствуйте, <Span weight='700'>{login}</Span></Greeting>
			<Button secondary onClick={onLogOutClick}>Выйти</Button>
		</ProfileContainer>
	)
}
