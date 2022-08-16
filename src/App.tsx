import React, { FC, useState } from 'react'
import { Nullable, ReturnComponentType } from 'types'
import { Authorization, Profile } from 'pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Path } from 'enums'

export type AuthorizedUserType = {
  id: number
  login: string
}

export const App: FC = (): ReturnComponentType => {

  const [authorizedUser, setAuthorizedUser] = useState<Nullable<AuthorizedUserType>>(null)
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <div>
      <Routes>
        <Route path={Path.LOGIN} element={<Authorization setAuthorizedUser={setAuthorizedUser} setIsAuth={setIsAuth} isAuth={isAuth} />} />
        <Route path={Path.PROFILE} element={<Profile authorizedUser={authorizedUser} isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path={Path.HOME} element={<Navigate to={Path.PROFILE} />} />
      </Routes>
    </div>
  )
}
