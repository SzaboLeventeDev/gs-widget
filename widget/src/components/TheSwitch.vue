<script setup lang="ts">
import {ref, watch} from 'vue';
const props = defineProps({
  value: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['set-value']);

const isActive = ref<boolean>(false);

watch(() => props.value, (newValue) => {
  isActive.value = newValue
})

const toggleSwitch = () => {
  isActive.value = !isActive.value;
  emit('set-value', isActive.value);
}
</script>
<template>
  <div class="switchContainer"
  :class="{active: isActive}"
  @click="toggleSwitch"
  role="switch"
  :aria-checked="isActive">
    <div class="thumb"></div>
  </div>
</template>
<style scoped lang="css">
.switchContainer{
  width: 2.5rem;
  height: 1.25rem;
  border: 1px solid var(--color-grey);
  border-radius: .7rem;
  transition: background-color 0.3s ease;
  position: relative;
}

.thumb {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--color-grey);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  position: absolute;
  top: 0.0125rem;
  left: 0.01rem;
}

.thumb:hover {
  box-shadow: 0 0 7.18px 3px var(--color-green-light);
}

.switchContainer.active {
  background-color: var(--color-green);
}
.switchContainer.active .thumb {
  transform: translateX(1.24rem);
  background-color: var(--color-white);
  right: 0.01rem;
}
</style>