<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <main>
    <the-header />
    <RouterView />
  </main>
</template>
<style lang="css" scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>