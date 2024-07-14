<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
import { useForm } from 'vee-validate'
import { registerSchema, type RegisterFields } from '@/types/validators/auth'

const { defineField, errors, handleSubmit } = useForm<RegisterFields>({
  validationSchema: registerSchema
})

const [name, nameAttrs] = defineField('name')
const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values: RegisterFields) => {
  console.log(values)
})
</script>

<template>
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
    <CButton type="submit" class="cursor-pointer">Sign Up</CButton>
    <p class="self-end">
      Already have an account?
      <RouterLink to="/login" class="text-blue-700 underline underline-offset-2 cursor-pointer"
        >Login</RouterLink
      >
    </p>
  </form>
</template>
