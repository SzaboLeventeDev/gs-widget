<script setup lang="ts">
import type { Widget } from '@/types/types';
import { computed } from 'vue';

const props = defineProps<{widget: Widget}>()
const {widget} = props;

const widgetCommonStyle = computed(() => `widget ${widget.selectedColor !== "beige" && widget.selectedColor !== 'white' ? "widget-white" : "widget-green"}`)

</script>
<template>
  <div :class="widgetCommonStyle" :style="{backgroundColor: widget.selectedColor}">
      <div class="icon-wrapper">
        <div  class="icon"></div>
        <p>greenspark</p>
      </div>
      <div class="title-wrapper">
        <h1 class="title-small">This product {{ widget.action }}</h1>
        <h1 class="title">{{ props.widget.amount }} {{ widget.type }}</h1>
      </div>
  </div>
</template>
<style lang="css" scoped>
.widget {
  width: 221.32px;
  height: 66px;
  border-radius: 5.95px;
  display: flex;
  justify-content: space-around;
}

.widget-white {
  color: var(--color-white);
}

.widget-green {
  color: var(--color-green);
}

.icon-wrapper {
  margin: .625rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  background-image: url(../assets/greenspark-logo.svg);
  width: 2.05rem;
  height: 2.05rem;
}

.icon-wrapper p {
  font-size: .75rem;
  letter-spacing: .001rem
}

.title-wrapper {
  margin: .75rem 0;
}

.title-small {
  font-size: .75rem;
}

.title {
  font-size: 1rem;
  font-weight: 600;
}

</style>