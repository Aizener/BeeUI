<template>
  <textarea
    class="b-textarea"
    :style="getStyle"
    :class="getClass"
    :placeholder="placeholder"
    :maxlength="maxlength"
    v-model="modelValue"
    @input="(e: Event) => $emit('update:modelValue', (e.currentTarget as HTMLInputElement)?.value)"
  ></textarea>
</template>

<script setup lang="ts">
import { getPX } from '@/utils';
import { computed, toRefs } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  width: { type: String, default: '300' },
  height: { type: String, default: '120' },
  placeholder: { type: String, default: '' },
  resizable: { type: Boolean, default: true },
  maxlength: { type: String, default: '' },
  maxWidth: { type: String, default: '' },
  maxHeight: { type: String, default: '' },
  minWidth: { type: String, default: '' },
  minHeight: { type: String, default: '' }
})

const {
  width: _width,
  height: _height,
  placeholder,
  resizable,
  maxlength,
  maxWidth: _maxWidth,
  maxHeight: _maxHeight,
  minWidth: _minWidth,
  minHeight: _minHeight,
} = toRefs(props)

const getStyle = computed(() => {
  const width = getPX(_width.value)
  const height = getPX(_height.value)
  const maxWidth = getPX(_maxWidth.value)
  const maxHeight = getPX(_maxHeight.value)
  const minWidth = getPX(_minWidth.value)
  const minHeight = getPX(_minHeight.value)

  return {
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight
  }
})

const getClass = computed(() => {
  return [resizable.value && 'resizable']
})

</script>

<style lang="scss" scoped>
.b-textarea {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  color: #666;
  resize: none;
  box-sizing: border-box;
  &.resizable { resize: auto; }
  &::-webkit-input-placeholder {
    color: #999;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #eee;
    cursor: pointer;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(240, 240, 240);
    &:active {
      background-color: rgb(230, 230, 230);
    }
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
  &:focus {
    outline: none;
    box-shadow: 3px 3px 3px inset #ccc;
  }
}
</style>