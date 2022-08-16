import { AuthorizedUserType, Nullable } from 'types'

export type ProfilePropsType = {
	authorizedUser: Nullable<AuthorizedUserType>
	isAuth: boolean
	setIsAuth: (auth: boolean) => void
}
