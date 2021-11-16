<template>
  <button class="b-button" :class="getClassName" :style="getStyle" :disabled="disabled && 'disabled'">
    <span class="b-text"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { toRefs, computed, PropType } from 'vue'
import { getColor, getPX, IColor } from '@/utils/index'

/**
 * @param type 按钮的类型
 * @param fill 按钮是否有填充色
 * @param disabled 是否禁用按钮
 * @param width 按钮的宽度，有效形式：100，100px，100%
 * @param height 按钮的高度，有效形式：100，100px，100%
 * @param block 按钮是否使用块级布局
 */
const props = defineProps({
  type: { type: String as PropType<keyof IColor>, default: 'default' },
  fill: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  width: { type: String, default: '' },
  height: { type:String, default: '' },
  block: { type: Boolean, default: false }
})
const { type, fill, disabled, width: _width, height: _height, block } = toRefs(props)
const getBgColor = (type: keyof IColor): string => {
  return getColor(type)
}

const getTextColor = (type: keyof IColor): string => {
  if (type !== 'default' && fill.value) {
    return '#fff'
  } else {
    return getColor(type)
  }
}

const getStyle = computed(() => {
  const color = getTextColor(type.value)
  const backgroundColor = fill.value ? getBgColor(type.value) : '#fff'
  const display = block.value ? 'block' : ''
  let width = ''
  if (_width.value) {
    width = getPX(_width.value)
  } else {
    width = block.value ? '100%' : ''
  }
  const height = getPX(_height.value)
  return {
    width,
    height,
    color,
    backgroundColor,
    display
  }
})

const getClassName = computed(() => {
  return [type.value, fill.value && 'fill', disabled.value && 'disabled']
})
</script>

<style scoped lang="scss">
.b {
  &-button {
    color: #666;
    font-size: 14px;
    padding: 7px 15px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    box-sizing: border-box;
    background-color: rgb(247, 247, 247);
    &.default { border: 1px solid #eee; }
    &.primary { border: 1px solid #1e80ff; }
    &.warning { border: 1px solid orange; }
    &.info { border: 1px solid #42b983; }
    &.danger { border: 1px solid tomato; }
    &:not(.disabled).fill.default:active { box-shadow: 4px 4px 7px inset #ccc; }
    &:not(.disabled).fill.primary:active { box-shadow: 4px 4px 7px inset #1b4dfa; }
    &:not(.disabled).fill.warning:active { box-shadow: 4px 4px 7px inset #FF7F50; }
    &:not(.disabled).fill.info:active { box-shadow: 4px 4px 7px inset #2E8B57; }
    &:not(.disabled).fill.danger:active { box-shadow: 4px 4px 7px inset red; }
    &:not(.disabled):active > .b-text {
      display: inline-block;
      transform: scale(.9);
    }
    &.disabled {
      cursor: no-drop;
      opacity: .85;
      &.default {
        color: #ccc;
        opacity: 1;
      }
    }
  }
}
</style>

