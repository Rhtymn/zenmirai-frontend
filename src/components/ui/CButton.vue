<script setup lang="ts">
import CSpinner from '@/components/ui/CSpinner.vue'
interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  isLoading?: boolean
  isDisabled?: boolean
}
withDefaults(defineProps<Props>(), {
  type: undefined,
  isLoading: false,
  isDisabled: false
})
</script>

<template>
  <button
    :disabled="isDisabled || isLoading"
    :type="type"
    class="bg-[#162D3A] text-white p-3 rounded-2xl"
    :class="`${isDisabled && `cursor-not-allowed opacity-35`} ${isLoading && `cursor-not-allowed`}`"
  >
    <slot v-if="!isLoading"></slot>
    <div v-else class="w-full flex justify-center">
      <CSpinner />
    </div>
  </button>
</template>
