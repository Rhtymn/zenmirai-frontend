<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
import FormNotification from '@/components/ui/FormNotification.vue'
import { useForm } from 'vee-validate'
import { loginSchema, type LoginFields } from '@/types/validators/auth'
import { ref } from 'vue'
import { type FormState } from '@/types'
import { login } from '@/services/auth'
import { BadRequest } from '@/exceptions/badRequest'

const { defineField, errors, handleSubmit, setValues } = useForm<LoginFields>({
  validationSchema: loginSchema
})
const resetValues = () => {
  setValues(
    {
      username: '',
      password: ''
    },
    false
  )
}

const formState = ref<FormState>({
  error: '',
  isError: false,
  isSubmitting: false,
  isSuccess: false
})

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values: LoginFields) => {
  try {
    formState.value.isSubmitting = true
    const res = await login(values)
    formState.value.isSuccess = true
    resetValues()
    alert(`Login success; token = ${res?.data?.token}`)
  } catch (e) {
    formState.value.isError = true
    if (e instanceof BadRequest) {
      formState.value.error = e.message
    } else {
      formState.value.error = 'server encounter error. try again later.'
    }
  } finally {
    formState.value.isSubmitting = false
  }
})
</script>

<template>
  <FormNotification :isShow="formState.isError" header="Login failed" type="failed">
    {{ formState.error }}
  </FormNotification>
  <form @submit="onSubmit" class="flex flex-col gap-y-4">
    <CInput
      id="username"
      label="Username"
      v-model="username"
      v-bind="usernameAttrs"
      :errors="errors.username"
    />
    <CInput
      id="password"
      type="password"
      label="Password"
      v-model="password"
      v-bind="passwordAttrs"
      :errors="errors.password"
    />
    <CButton type="submit" class="cursor-pointer" :is-loading="formState.isSubmitting"
      >Sign In</CButton
    >
    <p class="self-end">
      Don't have an account?
      <RouterLink to="/register" class="text-blue-700 underline underline-offset-2 cursor-pointer"
        >Register</RouterLink
      >
    </p>
  </form>
</template>
