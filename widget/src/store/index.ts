import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore } from 'vuex'
import type { State, Widget } from '@/types/types'
import type { Store } from 'vuex/types/index.js'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    widgets: [],
  },
  mutations: {
    initWidgets(state: State, payload: Widget[]) {
      if (!state.widgets.length) {
        state.widgets = [...payload]
      }
    },
    setWidgetColor(state: State, payload: Widget): void {
      const index = state.widgets.findIndex((w) => w.id === payload.id)
      if (index !== -1 && state.widgets[index].selectedColor !== payload.selectedColor) {
        state.widgets[index].selectedColor = payload.selectedColor
      }
    },
    toggleActivation(state: State, payload: Widget): void {
      const index = state.widgets.findIndex((w) => w.id === payload.id)
      if (index !== -1 && state.widgets[index].active !== payload.active) {
        state.widgets[index].active = payload.active
      }
    },
    togglePublication(state: State, payload: Widget): void {
      const index = state.widgets.findIndex((w) => w.id === payload.id)
      if (index !== -1) {
        state.widgets[index].linked = payload.linked
      }
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
