import React from 'react'
import { pb } from '../utils/pocketbase'
import { loginSchema, merged } from "../utils/validation"

export type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLButtonElement | HTMLFormElement>

export interface SubmitProps {
  register: (e: FormChangeEvent) => void,
  login: (e: FormChangeEvent) => void,
  loginWithGoogle: (e: FormChangeEvent) => void,
  singout: (e: FormChangeEvent) => void,
}

interface ErrorsProps {
  name?: string[],
  email?: string[],
  password?: string[],
  password_confirmation?: string[],
  other?: string[],
}

export interface FormProps {
  setCurrent: (name: string) => void,
}

export default function useForm() {

  const [values, setValues] = React.useState({
    name: '',
    tel: '',
    number: '',
    email: '',
    password: '',
    password_confirmation: '',
    stay: false
  })

  const [errors, setErrors] = React.useState<ErrorsProps | any>({
    name: [],
    email: [],
    number: [],
    password: [],
    password_confirmation: [],
    other: [],
  })

  const [loading, setLoading] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: [], other: [] })
  }

  const yupErrorToErrorObject = (err: any) => {
    const object:any [] = [];
    err.inner.forEach((x: any) => {
      if (x.path !== undefined) {
        object[x.path] = x.errors;
      }
    });
    return setErrors(object);
  }

  const handleSubmit = {
    register: (event: FormChangeEvent) => {
      event.preventDefault();
      setErrors({})
      setLoading(true)
      merged.validate(values, { abortEarly: false })
      .then(e => {
        pb.collection('users').create({
          username: values.name, 
          email: values.email,
          emailVisibility: true,
          password: values.password,
          passwordConfirm: values.password_confirmation,
          name: values.name,
          number: values.number
        })
        .then(async (e: any) => {
          alert(`Регистрация прошла успешно!`)
          setLoading(false)
          window.location.reload()
        })
        .catch(err => {
          setLoading(false)
        })
      })   
      .catch(e => {
        yupErrorToErrorObject(e)
        setLoading(false)
      })
    },
    login: async (event: FormChangeEvent) => {
      event.preventDefault();
      setErrors({})
      setLoading(true)
      loginSchema.validate({ email: values.email, password: values.password }, { abortEarly: false })
      .then(e => {
        pb.collection('users').authWithPassword(values.email, values.password)
        .then((e: any) => {
          alert(`Вы успешно вошли в систему как ${values.email}`)
          window.location.reload()
          setLoading(false)
        })
        .catch((e: any) => {
          setLoading(false)
        })
      })
      .catch(e => {
        yupErrorToErrorObject(e)
        setLoading(false)
      })
    },
    // loginWithGoogle: async (event: FormChangeEvent) => {
    //   event.preventDefault();
    //   setErrors({})
    //   setLoading(true)
    // },
    resetPassword: async (event: FormChangeEvent) => {
      event.preventDefault();
      setErrors({})
      setLoading(true)
    },
    singout: (event: FormChangeEvent) => {
      event.preventDefault();
    }
  }

  return {
    values,
    handleInputChange,
    handleSubmit,
    errors,
    loading,
    setErrors,
  }
}