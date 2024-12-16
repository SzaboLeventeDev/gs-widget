<script setup lang="ts">
import { computed } from 'vue';
import type { Color, Widget } from '@/types/types';
import TheWidget from '@/components/TheWidget.vue';
import TheColorBox from '@/components/TheColorBox.vue'
import TheSwitch from '@/components/TheSwitch.vue';
import TheCheckBox from '@/components/TheCheckBox.vue';
import { useStore } from '@/store/index';

const store = useStore();
const widgets = computed<Widget[]>(() => store.state.widgets)
const colors: Color[] = [ "blue", "green", "beige", "white", "black"];

const toggleActivation = (widget: Widget, isActive: boolean): void => {
  store.commit('toggleActivation', {
    ...widget, active: isActive
  })
}

const setColor = (widget: Widget, color: Color): void => {
  store.commit('setWidgetColor', {...widget, selectedColor: color})
}

const togglePublication = (widget: Widget, isLinked: boolean): void => {
  console.log('toggle')
  store.commit('togglePublication', {
    ...widget, linked: isLinked
  }
)
}
</script>
<template>
  <div class="widgetBox">
    <h1>Per product widgets</h1>
    <hr>
    <div class="widgetWrapper">
      <div v-for="widget in widgets" :key="widget.id">
        <the-widget :widget="widget"/>
        <div class="widget-body">
          <div class="widget-body-line">
            <label for="">Link to public profile</label>
            <the-check-box :value="widget.linked" @set-value="togglePublication(widget, $event)"/>
          </div>
          <div class="widget-body-line">
            <label for="">Badge colour</label>
            <div class="widget-body-line color-palette">
              <the-color-box v-for="color in colors" :key='color' :color="color" :isSelected="widget.selectedColor === color" @set-color="setColor(widget, $event)"/>
            </div>
          </div>
          <div class="widget-body-line">
            <label for="">Active badge</label>
            <the-switch :value="widget.active" @set-value="toggleActivation(widget, $event)"/>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.widgetBox {
  width: 80%;
  margin: auto;
}

hr {
  margin: 2.25rem 0;
}
.widgetWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
}

.widget-body {
  display: flex;
  flex-direction: column;
  gap: .625rem;
  label {
    color: var(--color-green);
  }
}

.widget-body-line {
  display: flex;
  justify-content: space-between;
}

.widget-body-line label {
  font-size: .875rem;
}

.color-palette {
  gap: .25rem;
}
</style>