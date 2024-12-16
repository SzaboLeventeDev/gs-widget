<script setup lang="ts">
import type { Widget } from '@/types';
import TheWidget from'../components/TheWidget.vue';
import { computed, onMounted } from 'vue';
import { useStore } from '@/store/index';
import { getWidgets } from '@/services/api';

const store = useStore();
const widgets = computed<Widget[]>(() => store.state.widgets.filter((widget: Widget) => widget.linked === true ));

async function init(): Promise<void> {
  const widgets = await getWidgets();
  store.commit('initWidgets', widgets);
}

onMounted(async () => {
  await init();
});
</script>
<template>
  <div class="widget-wrapper">
    <the-widget v-for="widget in widgets" :key="widget.id" :widget="widget"/>
  </div>
</template>
<style lang="css" scoped>
.widget-wrapper {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
}
</style>