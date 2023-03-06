

import { Button, PasswordInput, TextInput } from '@mantine/core'
import React from 'react'
import useForm from '../../../hooks/useForm'
import { CurrentForm } from '../AuthForm'

function Signup({setCurrent}: {setCurrent: (val: CurrentForm) => void}) {

  const { values, errors, handleSubmit, loading, handleInputChange } = useForm()

  return (
    <form 
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit.register(e)}
      className='space-y-4'
    >
      <TextInput
        name='name'
        value={values.name}
        onChange={handleInputChange}
        error={errors?.name?.[0]}
        label='Имя'
        variant='filled'
        placeholder='Ваше имя'
      />
      <TextInput
        name='number'
        value={values.number}
        onChange={handleInputChange}
        error={errors?.number?.[0]}
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
      <PasswordInput
        name='password'
        value={values.password}
        onChange={handleInputChange}
        error={errors?.password?.[0]}
        label='Пароль'
        variant='filled'
      />
      <PasswordInput
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

        <p>
          <span 
            className='underline text-blue-400 cursor-pointer' 
            onClick={() => setCurrent('login')}
          >
            Уже были у нас?
          </span>
        </p>

      <Button
        loading={loading}
        fullWidth
        type='submit'
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}

export default Signup