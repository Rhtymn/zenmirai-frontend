import * as yup from 'yup'
import { leadingTrailingWhiteSpaceValidation, notContainWhiteSpace, passwordValidation } from '.'

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('please fill name field')
    .test(
      'whitespace-validation',
      'name should not have leading or trailing white space',
      leadingTrailingWhiteSpaceValidation
    ),
  username: yup
    .string()
    .required('please fill username field')
    .min(6)
    .test(
      'whitespace-validation',
      'username should not contain any white space',
      notContainWhiteSpace
    ),
  password: yup
    .string()
    .required('please fill password field')
    .min(8)
    .test(
      'whitespace-validation',
      'password should not contain any white space',
      notContainWhiteSpace
    )
    .test(
      'password-validation',
      'password should contain at least one number, special characters, uppercase, and lowercase',
      passwordValidation
    )
})
export type RegisterFields = yup.InferType<typeof registerSchema>

export const loginSchema = yup.object({
  username: yup
    .string()
    .required('please fill username field')
    .min(6)
    .test(
      'whitespace-validation',
      'username should not contain any white space',
      notContainWhiteSpace
    ),
  password: yup.string().required('please fill password field').min(8)
})
export type LoginFields = yup.InferType<typeof loginSchema>
