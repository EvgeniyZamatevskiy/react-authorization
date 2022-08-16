import { RegisteredUser } from 'enums'
import { randomDelay } from 'utils'

export const AUTH = {
	login(login: string, password: string) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

				if (login === RegisteredUser.LOGIN && password === RegisteredUser.PASSWORD) {
					resolve({ data: { id: RegisteredUser.ID, login } })
					return
				}

				if (login !== RegisteredUser.LOGIN) {
					reject({ message: `Пользователя ${login} не существует!` })
					return
				}

				if (password !== RegisteredUser.PASSWORD) {
					reject({ message: 'Неверный пароль!' })
					return
				}

				return null

			}, randomDelay(500, 3000))
		})
	}
}
