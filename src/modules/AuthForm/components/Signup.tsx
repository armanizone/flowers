

import { Button, TextInput } from '@mantine/core'
import React from 'react'
import useForm from '../../../hooks/useForm'
import { CurrentForm } from '../AuthForm'

function Signup({setCurrent}: {setCurrent?: (val: CurrentForm) => void}) {

  const { values, errors, handleSubmit, loading, handleInputChange } = useForm()

  return (
    <form 
      // onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit.login(e)}
      className='space-y-4'
    >
      <TextInput
        name='name'
        value={values.email}
        onChange={handleInputChange}
        error={errors?.email?.[0]}
        label='Имя'
        variant='filled'
        placeholder='Ваше имя'
      />
      <TextInput
        name='name'
        value={values.tel}
        onChange={handleInputChange}
        error={errors?.tel?.[0]}
        label='Номер телефона'
        variant='filled'
        placeholder='+7 702 429 91 46'
      />
      <TextInput
        name='email'
        value={values.email}
        onChange={handleInputChange}
        error={errors?.email?.[0]}
        label='Почта'
        variant='filled'
        placeholder='example@mail.ru'
      />
      <TextInput
        name='password'
        value={values.password}
        onChange={handleInputChange}
        error={errors?.password?.[0]}
        label='Пароль'
        variant='filled'
      />
      <TextInput
        name='password_confirmation'
        value={values.password_confirmation}
        onChange={handleInputChange}
        error={errors?.password_confirmation?.[0]}
        label='Подтверждение пароля'
        variant='filled'
      />
      {errors?.other?.[0] && (
        <p className='text-red-500 text-sm'>{errors?.other?.[0]}</p>
      )}
      <Button
        loading={loading}
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}

export default Signup