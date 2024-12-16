<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    required: true
  }

})
const emit = defineEmits(['set-value']);

const valueProp = ref<boolean>(props.value);

const onCheckChanged = (value: boolean) => {
  emit('set-value', value)
}

watch(() => props.value, (newVal) => valueProp.value = newVal)
</script>
<template>
  <input type="checkbox" v-model="valueProp" @change="onCheckChanged(valueProp)"/>
</template>
<style scoped lang="css">
.checkbox {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-black);
  border-radius: 0.25rem;
  background-color: var(--color-white);
  appearance: none;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}


.checkbox:hover::after {
  content: "";
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-green-light);
  border-radius: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  pointer-events: none;
}


.checkbox:checked {
  background-color: var(--color-green);
  border-color: var(--color-green);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTAuNjg5Nkw4LjQ4NDY4IDE0TDE1IDEwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1rem;
}
</style>