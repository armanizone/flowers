import React from 'react'
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
    email: '',
    password: '',
    password_confirmation: '',
    stay: false
  })

  const [errors, setErrors] = React.useState<ErrorsProps | any>({
    name: [],
    email: [],
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
    // register: (event: FormChangeEvent) => {
    //   event.preventDefault();
    //   setErrors({})
    //   setLoading(true)
    //   merged.validate(values, { abortEarly: false })
    //   .then(e => {
    //     createUserWithEmailAndPassword(auth, values.email, values.password)
    //     .then(async (e: any) => {
    //       await updateProfile(e.user, {
    //         displayName: values.name
    //       })
    //       await setDoc(doc(db, 'users', e.user.uid!), {
    //         displayName: values.name,
    //         email: values.email, 
    //         created_at: serverTimestamp(),
    //         uid: e.user.uid
    //       })
    //       sendEmailVerification(e.user)
    //       .then(() => {
    //         setLoading(false)
    //         alert(`Регистрация прошла успешно! Письмо с подтверждением было выслано на почту ${e.user.email}`)
    //       })
    //       .catch((e: any) => {
    //         console.log(e);
    //         setLoading(false)
    //         alert(`Регистрация прошла успешно! Не удалось отправить письмо с подтверждением на почту ${e.user.email}`)
    //       })
    //     })
    //     .catch((e: any) => {
    //       if (e.code === 'auth/too-many-requests') {
    //         setErrors({ ...errors, other: ['Сликом много попыток попробуйте чуть позже'] })
    //       }
    //       if (e.code === 'auth/email-already-in-use') {
    //         setErrors({ ...errors, other: ['Пользователь с такой почтой уже существует'] })
    //       }
    //       setLoading(false)
    //       console.log(e);
    //     })
    //   })   
    //   .catch(e => {
    //     yupErrorToErrorObject(e)
    //     setLoading(false)
    //   })
    // },
    // login: async (event: FormChangeEvent) => {
    //   event.preventDefault();
    //   setErrors({})
    //   setLoading(true)
    //   loginSchema.validate({ email: values.email, password: values.password }, { abortEarly: false })
    //   .then(e => {
    //     signInWithEmailAndPassword(auth, values.email, values.password)
    //     .then((e: any) => {
    //       setLoading(false)
    //       alert(`Вы успешно вошли в систему как ${e.user.displayName}`)
    //     })
    //     .catch((e: any) => {
    //       if (e.code === 'auth/too-many-requests') {
    //         setErrors({ ...errors, other: ['Слишком много попыток попробуйте чуть позже'] })
    //       }
    //       if (e.code === 'auth/user-not-found') {
    //         setErrors({ ...errors, other: ['Пользователь не найден'] })
    //       }
    //       if (e.code === 'auth/wrong-password') {
    //         setErrors({ ...errors, password: ['Неверный пароль'] })
    //       }
    //       console.log(e);
    //       setLoading(false)
    //     })
    //   })
    //   .catch(e => {
    //     yupErrorToErrorObject(e)
    //     setLoading(false)
    //   })
    // },
    // // loginWithGoogle: async (event: FormChangeEvent) => {
    // //   event.preventDefault();
    // //   setErrors({})
    // //   setLoading(true)
    // // },
    // resetPassword: async (event: FormChangeEvent) => {
    //   event.preventDefault();
    //   setErrors({})
    //   setLoading(true)
    // },
    // singout: (event: FormChangeEvent) => {
    //   event.preventDefault();
    // }
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