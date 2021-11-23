<template>
  <div
    class="b-radio"
    :class="[active === label && 'active']"
    @click="handleClick"
  >
    <div class="b-radio-entity" :class="getClass" :style="getStyle" :type="type"></div>
    <span class="b-text">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { getPX } from '@/utils'
import { computed, inject, ref, toRefs, watch } from 'vue'

const props = defineProps({
  size: { type: String, default: '16' },
  type: { type: String, default: 'circle' },
  color: { type: String, defualt: '#1e80ff' },
  modelValue: { type: String, default: '' },
  label: { type: String, requried: true}
})

const emit = defineEmits(['update:modelValue'])

const { size, type, color, modelValue, label } = toRefs(props)
const active = ref()

// 判断是否来自group组件，分别做不同操作
const groupModelValue: any = inject('groupModelValue', '')
let changeGroupModelVal: any
if (groupModelValue) {
  active.value = groupModelValue.value
  changeGroupModelVal = inject('changeGroupModelVal')
} else {
  active.value = modelValue.value
}

// 监听自身组件传过来的数据
watch(() => modelValue.value, newVal => {
  active.value = newVal
})

// 监听group的数据
watch(() => groupModelValue.value, newVal => {
  active.value = newVal
})

const handleClick = () => {
  if (groupModelValue) {
    changeGroupModelVal(label?.value)
  } else {
    emit('update:modelValue', label?.value)
  }
}

const getStyle = computed(() => {
  const width = getPX(size.value)
  const height = getPX(size.value)
  const borderRadius = type.value === 'circle' ? '50%' : '3px'

  return {
    width,
    height,
    borderRadius,
    '--color': color?.value  || '#1e80ff'
  }
})

const getClass = computed(() => {
  return []
})
</script>

<style lang="scss" scoped>
$color: var(--color);
.b-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 4px 4px 6px;
  box-sizing: border-box;
  &.active {
    border-radius: 5px;
    box-shadow: 3px 3px 3px inset #ccc;
    border: 1px solid #eee;
    .b-radio-entity {
      &::after {
        opacity: 1;
      }
    }
    & > * {
      opacity: .85;
      transform: scale(.95);
    }
  }
  &-entity {
    position: relative;
    border: 1px solid $color;
    &::after {
      content: '';
      position: absolute;
      left: 2px; top: 2px; right: 2px; bottom: 2px;
      background-color: $color;
      transition: opacity 0.3s;
      opacity: 0;
      border-radius: 3px;
    }
    &[type="circle"] {
      &::after {
        border-radius: 50%;
      }
    }
  }
  & > .b-text {
    color: #333;
    font-size: 14px;
    margin-left: 5px;
    user-select: none;
  }
}
</style>