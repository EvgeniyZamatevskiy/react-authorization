import React, { FC } from 'react'
import { Path } from 'enums'
import { Navigate } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { Button } from 'styles'
import { Greeting, ProfileContainer } from './styled'
import { ProfilePropsType } from './types'

export const Profile: FC<ProfilePropsType> = ({ authorizedUser, isAuth, setIsAuth }): ReturnComponentType => {

	const login = authorizedUser?.login

	const onLogOutClick = (): void => setIsAuth(false)

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<ProfileContainer direction='column' align='center'>
			<Greeting>Здравствуйте, <span style={{ fontWeight: 700 }}>{login}</span></Greeting>
			<Button mt='50px' width='200px' backgroundColor='#F5F5F5' color='#000' onClick={onLogOutClick}>
				Выйти
			</Button>
		</ProfileContainer>
	)
}
