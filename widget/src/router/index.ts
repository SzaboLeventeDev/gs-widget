import { createRouter, createWebHistory } from 'vue-router'
import SettingsView from '@/views/SettingsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
  ],
})

export default router
