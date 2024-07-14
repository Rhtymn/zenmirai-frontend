<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
import { useForm } from 'vee-validate'
import { loginSchema, type LoginFields } from '@/types/validators/auth'

const { defineField, errors, handleSubmit } = useForm<LoginFields>({
  validationSchema: loginSchema
})

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values: LoginFields) => {
  console.log(values)
})
</script>

<template>
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
      label="Password"
      v-model="password"
      v-bind="passwordAttrs"
      :errors="errors.password"
    />
    <CButton>Sign In</CButton>
    <p class="self-end">
      Don't have an account?
      <RouterLink to="/register" class="text-blue-700 underline underline-offset-2 cursor-pointer"
        >Register</RouterLink
      >
    </p>
  </form>
</template>
