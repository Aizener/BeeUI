<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)

provide('groupModelValue', modelValue)
provide('changeGroupModelVal', (label: string) => {
  emit('update:modelValue', label)
})

</script>

<style lang="scss" scoped>
  
</style>