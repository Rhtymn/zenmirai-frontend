export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  error: string
}

export const defaultFormState: FormState = {
  isError: false,
  isSubmitting: false,
  isSuccess: false,
  error: ''
}
