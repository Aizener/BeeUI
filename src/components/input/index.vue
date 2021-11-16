<template>
  <div class="b-input" :style="getStyle" :class="[clear && 'b-clear', focus && 'b-shadow']">
    <slot name="prefix"></slot>
    <input
      class="b-input-entity"
      ref="inputRef"
      :class="getClass"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      v-model="modelValue"
      @focus="focus = true"
      @blur="handleBlur"
      @input="e => $emit('update:modelValue', e.currentTarget.value)"
    />
    <slot name="subfix"></slot>
    <b-icon
      class="b-clear"
      name="clear"
      width="24"
      height="24"
      fill="#999"
      v-if="clear && modelValue.length"
      @click.stop="handleClear"
    ></b-icon>
  </div>
</template>

<script setup lang="ts">
import { getPX } from '@/utils'
import { computed, toRefs, ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  width: { type: String, default: '200' },
  height: { type: String, default: '35' },
  disabled: { type: Boolean, default: false },
  maxlength: { type: String, default: '' },
  clear: { type: Boolean, default: false }
})

const {
  type,
  disabled,
  placeholder,
  maxlength,
  clear,
  width: _width,
  height: _height
} = toRefs(props)

const emit = defineEmits(['update:modelValue'])
const inputRef = ref()
const focus = ref(false)
const canClear = ref(false)

const handleBlur = () => {
  focus.value = false
  canClear.value = true
  // 因为blur事件会优先click事件执行，所以通过定时器来修改清除事件是否可执行
  // 防止没聚焦input时（此时未显示清除图片，但可点击），点击清除地方清除了内容
  setTimeout(() => {
    canClear.value = false
  }, 300)
}

const handleClear = () => {
  if (canClear.value) {
    emit('update:modelValue', '')
    inputRef.value.focus()
  }
}

const getStyle = computed(() => {
  const width = getPX(_width.value)
  const height = getPX(_height.value)

  return {
    width,
    height
  }
})

const getClass = computed(() => [disabled.value && 'disabled'])

</script>

<style lang="scss" scoped>
.b-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
  &.b-clear { padding-right: 20px; }
  &.b-shadow {
    outline: none;
    border: 1px solid #eee;
    box-shadow: 3px 3px 5px inset #ccc;
  }
  &-entity {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: 14px;
    color: #666;
    &.disabled { cursor: no-drop; }
    &::-webkit-input-placeholder { color: #ccc; }
    &:focus {
      background: transparent;
      & + .b-clear { opacity: 1; }
    }
  }
  .b-clear {
    position: absolute;
    right: 0;
    cursor: pointer;
    transform: translateY(2px);
    opacity: 0;
    transition: opacity .3s;
  }
}
</style>