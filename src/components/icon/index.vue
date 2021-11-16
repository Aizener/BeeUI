<template>
  <i class="b-icon">
    <component :is="getCompName" :width="width" :height="height" :fill="fill" />
  </i>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from 'vue'
import * as icons from './index'

const props = defineProps({
  name: { type: String, required: true },
  width: { type: String, default: '24' },
  height: { type: String, default: '24' },
  fill: { type: String, default: '#333' }
})
const { name, width, height, fill } = toRefs(props)

const getCompName = computed(() => {
  const _name = name.value.charAt(0).toUpperCase() + name.value.substr(1)
  const comp = (icons as any)[`${_name}Icon`]
  return comp
})
</script>

<style scoped lang="ts">

</style>