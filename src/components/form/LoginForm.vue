<script setup lang="ts">
import CInput from '@/components/ui/CInput.vue'
import CButton from '@/components/ui/CButton.vue'
</script>

<template>
  <form class="flex flex-col gap-y-4">
    <CInput id="username" label="Username" />
    <CInput id="password" label="Password" />
    <CButton>Sign Up</CButton>
    <p class="self-end">
      Don't have an account?
      <a class="text-blue-700 underline underline-offset-2 cursor-pointer">Register</a>
    </p>
  </form>
</template>
