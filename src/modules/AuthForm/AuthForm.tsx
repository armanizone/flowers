import React from 'react'
import useAuth from '../../hooks/useAuth'
import Login from './components/Login'
import Signup from './components/Signup'


export type CurrentForm = 'login' | 'signup' 

function AuthForm() {

  const { logged } = useAuth()
  const [current, setCurrent] = React.useState<CurrentForm>("signup")

  return (
    <>
      {(current === "login") && <Login setCurrent={setCurrent}/>}
      {(current === "signup") && <Signup setCurrent={setCurrent}/>}
    </>
  )

}

export default AuthForm