<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
import FormNotification from '@/components/ui/FormNotification.vue'
import { useForm } from 'vee-validate'
import { registerSchema, type RegisterFields } from '@/types/validators/auth'
import { register } from '@/services/auth'
import { BadRequest } from '@/exceptions/badRequest'
import { ref } from 'vue'
import { defaultFormState, type FormState } from '@/types'
import { useRouter } from 'vue-router'

const { defineField, errors, handleSubmit, setValues } = useForm<RegisterFields>({
  validationSchema: registerSchema
})
const resetValues = () => {
  setValues(
    {
      name: '',
      username: '',
      password: ''
    },
    false
  )
}

const router = useRouter()

const formState = ref<FormState>(defaultFormState)
const resetFormState = () => {
  formState.value.error = ''
  formState.value.isError = false
  formState.value.isSubmitting = false
  formState.value.isSuccess = false
}

const [name, nameAttrs] = defineField('name')
const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values: RegisterFields) => {
  try {
    formState.value.isSubmitting = true
    await register(values)
    formState.value.isSuccess = true
    resetValues()
    setTimeout(() => {
      resetFormState()
      router.replace('/login')
    }, 3000)
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
  <FormNotification
    :isShow="formState.isSuccess || formState.isError"
    :header="formState.isSuccess ? `Successfully registered` : `Registration failed`"
    :type="formState.isSuccess ? `success` : `failed`"
  >
    {{ formState.isSuccess ? 'we will redirect you to the login page...' : formState.error }}
  </FormNotification>
  <form @submit="onSubmit" class="flex flex-col gap-y-4">
    <CInput id="name" label="Name" v-model="name" v-bind="nameAttrs" :errors="errors.name" />
    <CInput
      id="username"
      label="Username"
      v-model="username"
      v-bind="usernameAttrs"
      hint="username at least 6 characters"
      :errors="errors.username"
    />
    <CInput
      id="password"
      label="Password"
      type="password"
      v-model="password"
      v-bind="passwordAttrs"
      :errors="errors.password"
      hint="password should contains lowercase & uppercase letter, symbol, and number"
    />
    <CButton type="submit" class="cursor-pointer" :isLoading="formState.isSubmitting">
      Sign Up</CButton
    >
    <p class="self-end">
      Already have an account?
      <RouterLink to="/login" class="text-blue-700 underline underline-offset-2 cursor-pointer"
        >Login</RouterLink
      >
    </p>
  </form>
</template>
