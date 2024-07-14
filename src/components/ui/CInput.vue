<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()

interface Props {
  label?: string
  placeholder?: string
  hint?: string
  errors?: string
  modelValue: String
}

const id = attrs['id'] as string

defineProps<Props>()
defineEmits(['update:modelValue'])

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      v-bind="$attrs"
      class="border border-[#D4D7E3] bg-[#F3F7FB] p-2 rounded-lg"
      :placeholder="placeholder"
    />
    <span class="text-xs text-gray-400" v-if="hint && !errors">{{ hint }}</span>
    <span class="text-xs text-red-500" v-if="errors">{{ errors }}</span>
  </div>
</template>
