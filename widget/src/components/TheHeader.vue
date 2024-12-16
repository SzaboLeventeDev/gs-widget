<script setup lang="ts"></script>
<template>
  <nav>
    <div>
      <router-link :to="{name: 'home'}">
        <h1>Greenspark</h1>
      </router-link>
    </div>
    <ul>
      <li>
        <router-link :to="{name: 'settings'}">Settings</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="css">
nav {
  margin: 0 auto;
  width: 70%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

h1 {
  color: var(--color-green);
}

li {
 list-style-type: none;
}

li a {
  transition: 0.4s;
  color: var(--color-green);
}
li:hover {
  transform: translateY(-0.1rem);
}

li:hover a {
  background-color: transparent;
}
</style>