<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
}
defineProps<Props>()
</script>

<template>
  <button :type="type" class="bg-[#162D3A] text-white p-3 rounded-2xl">
    <slot></slot>
  </button>
</template>
