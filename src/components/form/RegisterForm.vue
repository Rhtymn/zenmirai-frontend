<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
</script>

<template>
  <form class="flex flex-col gap-y-4">
    <CInput id="name" label="Name" />
    <CInput id="username" label="Username" hint="username at least 6 characters" />
    <CInput
      id="password"
      label="Password"
      hint="password should contains uppercase letter, symbol, and number"
    />
    <CButton>Sign Up</CButton>
    <p class="self-end">
      Already have an account?
      <a class="text-blue-700 underline underline-offset-2 cursor-pointer">Login</a>
    </p>
  </form>
</template>
