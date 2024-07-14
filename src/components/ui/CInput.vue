<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

interface Props {
  label?: string
  placeholder?: string
  hint?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label v-if="label" :for="$attrs['id']">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="border border-[#D4D7E3] bg-[#F3F7FB] p-2 rounded-lg"
      :placeholder="placeholder"
    />
    <span class="text-xs text-gray-400" v-if="hint">{{ hint }}</span>
  </div>
</template>
