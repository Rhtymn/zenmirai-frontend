<script setup lang="ts">
import CSpinner from '@/components/ui/CSpinner.vue'
interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  isLoading?: boolean
}
withDefaults(defineProps<Props>(), {
  type: undefined,
  isLoading: false
})
</script>

<template>
  <button :type="type" class="bg-[#162D3A] text-white p-3 rounded-2xl">
    <slot v-if="!isLoading"></slot>
    <div v-else class="w-full flex justify-center">
      <CSpinner />
    </div>
  </button>
</template>
