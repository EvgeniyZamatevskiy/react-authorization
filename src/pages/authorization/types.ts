import { AuthorizedUserType, Nullable } from 'types'

export type AuthorizationPropsType = {
	isAuth: boolean
	setAuthorizedUser: (authorizedUser: Nullable<AuthorizedUserType>) => void
	setIsAuth: (isAuth: boolean) => void
}

export type LoginParamsType = {
	login: string
	password: string
}
