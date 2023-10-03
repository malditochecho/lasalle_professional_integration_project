<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
