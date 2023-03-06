import { Button, PasswordInput, TextInput } from '@mantine/core'
import React from 'react'
import useForm from '../../../hooks/useForm'
import { CurrentForm } from '../AuthForm'

function Login({setCurrent}: {setCurrent: (val: CurrentForm) => void}) {

  const { values, errors, handleSubmit, loading, handleInputChange } = useForm()

  return (
    <form 
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit.login(e)}
      className='space-y-4'
    >
      <TextInput
        name='email'
        value={values.email}
        onChange={handleInputChange}
        error={errors?.email?.[0]}
        label='Почта'
        placeholder='example@mail.ru'
        variant='filled'
      />
      <PasswordInput
        name='password'
        value={values.password}
        onChange={handleInputChange}
        error={errors?.password?.[0]}
        label='Пароль'
        variant='filled'
      />
      {errors?.other?.[0] && (
        <p className='text-red-500 text-sm'>{errors?.other?.[0]}</p>
      )}
      <p className='flex justify-between'>
        <span 
          className='underline text-blue-400 cursor-pointer' 
          onClick={() => setCurrent('signup')}
        >
          Первый раз тут?
        </span>
      </p>
      <Button
        loading={loading}
        className='mt-4'
        fullWidth
        type='submit'
      >
        Войти
      </Button>
    </form>
  )
}

export default Login