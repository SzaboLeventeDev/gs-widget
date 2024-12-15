<script setup lang="ts">
import { defineProps, ref, watch, computed, onMounted } from 'vue';
import { type Color } from '@/types';

const props = defineProps<{color: Color, isSelected: boolean}>();
const emit = defineEmits(['set-color'])

const { color } = props;

const isSelectedProp = ref<boolean>(false);
const classes = computed(() => `box ${isSelectedProp.value ? 'box-selected': ''}`);

onMounted(() => isSelectedProp.value = props.isSelected)

watch(() => props.isSelected, (newVal) => {
  isSelectedProp.value = newVal
})
</script>
<template>
  <div :class="classes" :style="{backgroundColor: color}" @click="emit('set-color', color)"></div>
</template>
<style lang="css" scoped>
.box {
  width: 1rem;
  height: 1rem;
}

.box:hover {
  opacity: 0.8;
  cursor: pointer;
}
.box-selected {
  border: 2px solid var(--color-grey)
}
</style>