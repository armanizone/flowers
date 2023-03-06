import React from 'react'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import Signup from './components/Signup'


export type CurrentForm = 'login' | 'signup' | 'forgot' 

function AuthForm() {

  const [current, setCurrent] = React.useState<CurrentForm>("login")

  return (
    <>
      {(current === "login") && <Login setCurrent={setCurrent}/>}
      {(current === "signup") && <Signup setCurrent={setCurrent}/>}
      {(current === "forgot") && <ForgotPassword setCurrent={setCurrent}/>}
    </>
  )

}

export default AuthForm