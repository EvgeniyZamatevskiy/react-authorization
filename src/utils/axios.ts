import { RegisteredUser } from 'enums'
import { LoginParamsType } from 'pages/authorization/types'
import { randomDelay } from 'utils'

export const axios = {
	post(url: string, data: LoginParamsType) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let responseData = {}

				if (url.includes('imitation')) {
					responseData = { id: RegisteredUser.ID, login: data.login }
				}

				if (data.login === RegisteredUser.LOGIN && data.password === RegisteredUser.PASSWORD) {
					resolve({
						request: {},
						status: 200,
						headers: {},
						data: responseData
					})
					return
				}

				if (data.login !== RegisteredUser.LOGIN) {
					reject({ message: `Пользователя ${data.login} не существует` })
					return
				}

				if (data.password !== RegisteredUser.PASSWORD) {
					reject({ message: 'Неверный пароль' })
					return
				}

				return null

			}, randomDelay(500, 3000))
		})
	},
}
