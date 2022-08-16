import React, { FC, useState } from 'react'
import { AuthorizedUserType, Nullable, ReturnComponentType } from 'types'
import { Authorization, Profile } from 'pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import { Wrapper, Title } from 'styles'

export const App: FC = (): ReturnComponentType => {

  const [authorizedUser, setAuthorizedUser] = useState<Nullable<AuthorizedUserType>>(null)
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <>
      <Title>ONLY.</Title>
      <Wrapper>
        <Routes>
          <Route path={Path.LOGIN} element={<Authorization setAuthorizedUser={setAuthorizedUser} setIsAuth={setIsAuth} isAuth={isAuth} />} />
          <Route path={Path.PROFILE} element={<Profile authorizedUser={authorizedUser} isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path={Path.HOME} element={<Navigate to={Path.PROFILE} />} />
        </Routes>
      </Wrapper>
    </>
  )
}
