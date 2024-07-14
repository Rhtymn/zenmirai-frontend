<script setup lang="ts">
interface Props {
  isShow: boolean
  header: string
  type: 'success' | 'failed'
}
withDefaults(defineProps<Props>(), {
  isShow: false,
  header: '',
  type: 'failed'
})
</script>

<template>
  <div
    v-if="isShow"
    :class="`w-full px-4 py-2 ${type === `success` ? `bg-green-200` : `bg-red-200`} rounded-md`"
  >
    <p :class="`${type === `success` ? `text-green-600` : `text-red-600`} font-semibold text-md`">
      {{ header }}
    </p>
    <p :class="`${type === `success` ? `text-green-600` : `text-red-600`} font-thin text-sm`">
      <slot></slot>
    </p>
  </div>
</template>
