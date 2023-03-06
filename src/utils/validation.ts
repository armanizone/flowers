import * as yup from 'yup'


const loginSchema = yup.object({
  email: yup.string().email("Это не почта").required("Почта обязательна для заполнения"),
  password: yup.string().min(8, "Минимум 8 символов").max(20, "Максимум 20 символов").required("Пароль обязателен для заполнения"),
})

const optionalSchema = yup.object().shape({
  name: yup.string().min(2, "Слишком короткое имя").required("Имя обязательно для заполнения"),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null!], 'Пароли не совпадают')
})

const merged = loginSchema.concat(optionalSchema)

export {
  merged,
  loginSchema,
}