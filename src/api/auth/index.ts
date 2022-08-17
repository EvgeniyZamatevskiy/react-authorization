import { axios } from 'utils'

export const AUTH = {
	login(login: string, password: string) {
		return axios.post('http://imitation.com/api/', { login, password })
	}
}
