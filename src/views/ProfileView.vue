<script setup>
import { useAuthStore } from '@/stores/auth'

// pinia
const authStore = useAuthStore()
</script>

<template>
  <main class="container">
    <img
      :src="authStore.user.photoURL ? authStore.user.photoURL : 'null'"
      alt="google-avatar-photo"
      class="mb-8 w-32 rounded-full shadow-xl"
    />
    <p class="mb-8 text-3xl font-bold">
      Hi {{ authStore.user.displayName ? authStore.user.displayName : 'empty' }}!
    </p>
    <div class="border p-8">
      <h2 class="text-3xl font-bold">Favorite movies</h2>
      <ul>
        <li>Matrix</li>
        <li>The Lord of the rings: The fellowship of the ring</li>
        <li>Break point</li>
        <li>Seven samurai</li>
        <li>Cinema paradiso</li>
        <li>load more...</li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
