<script setup>
import { useAuthStore } from '@/stores/auth'

// pinia
const authStore = useAuthStore()
</script>

<template>
  <main class="container grid grid-cols-12 gap-5">
    <div class="col-span-12 border p-8 shadow-inner md:col-span-4">
      <img
        :src="authStore.user.photoURL ? authStore.user.photoURL : 'null'"
        alt="google-avatar-photo"
        class="mb-8 w-32 rounded-full shadow-lg"
      />
      <p class="mb-8 text-3xl font-bold">
        Hi {{ authStore.user.displayName ? authStore.user.displayName : 'empty' }}!
      </p>
    </div>
    <div class="col-span-12 border p-8 shadow-inner md:col-span-8 md:col-start-5">
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
    <div class="col-span-12 border p-8 shadow-inner md:col-span-8 md:col-start-5">
      <h2 class="text-3xl font-bold">My votes</h2>
      <ul>
        <li>Matrix</li>
        <li>The Lord of the rings: The fellowship of the ring</li>
        <li>Break point</li>
        <li>Seven samurai</li>
        <li>Cinema paradiso</li>
        <li>load more...</li>
      </ul>
    </div>
    <div class="col-span-12 border p-8 shadow-inner md:col-span-8 md:col-start-5">
      <h2 class="text-3xl font-bold">My genres</h2>
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
