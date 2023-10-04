<script setup>
import { getAuth } from 'firebase/auth'
let auth = getAuth()
</script>

<template>
  <main class="container">
    <img
      :src="auth.currentUser.photoURL"
      alt="google-avatar-photo"
      class="mb-8 w-32 rounded-full shadow-xl"
    />
    <p class="mb-8 text-3xl font-bold">Hi {{ auth.currentUser.displayName }}!</p>
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
