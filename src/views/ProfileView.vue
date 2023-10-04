<script setup>
import { useAuthStore } from '@/stores/auth'

// pinia
const authStore = useAuthStore()
</script>

<template>
  <main class="container grid grid-cols-12 gap-5">
    <div class="col-span-12 border p-8 text-center shadow-inner">
      <img
        v-if="authStore.user.photoURL"
        :src="authStore.user.photoURL"
        alt="google-avatar-photo"
        class="mx-auto mb-8 w-32 rounded-full shadow-lg"
      />
      <span v-else class="mb-4 text-8xl">🙋‍♂️</span>
      <p class="text-3xl font-bold">
        Hi {{ authStore.user.displayName ? authStore.user.displayName : 'there' }}!
      </p>
    </div>
    <div class="col-span-12 col-start-1 border p-8 shadow-inner md:col-span-4 md:col-start-1">
      <p class="mb-8 text-3xl font-bold">Admin panel</p>
      <ul class="space-y-2">
        <RouterLink to="/movie/new">
          <li
            class="cursor-pointer bg-emerald-500 px-3 py-2 text-center text-white hover:bg-emerald-400"
          >
            Add new movie
          </li>
        </RouterLink>
        <li
          class="cursor-pointer bg-emerald-500 px-3 py-2 text-center text-white hover:bg-emerald-400"
        >
          Manage user
        </li>
      </ul>
    </div>
    <div class="col-span-12 border p-8 shadow-inner md:col-span-8 md:col-start-5">
      <h2 class="col-span-12 mb-4 text-3xl font-bold">❤️ Favorite movies</h2>
      <ul class="grid grid-cols-12 gap-5">
        <li class="col-span-3">
          <img src="@/assets/img/fav_1.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_2.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_3.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_4.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_5.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
      </ul>
      <RouterLink to="/profile/#">
        <p class="mt-4 text-right font-medium uppercase text-blue-500">see more →</p>
      </RouterLink>
    </div>
    <div class="col-span-12 border p-8 shadow-inner md:col-span-8 md:col-start-5">
      <h2 class="mb-4 text-3xl font-bold">👀 Watchlist</h2>
      <ul class="grid grid-cols-12 gap-5">
        <li class="col-span-3">
          <img src="@/assets/img/fav_1.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_2.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_3.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_4.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
        <li class="col-span-3">
          <img src="@/assets/img/fav_5.jpg" alt="movie poster" class="aspect-[2/3] h-48" />
        </li>
      </ul>
      <RouterLink to="/profile/#">
        <p class="mt-4 text-right font-medium uppercase text-blue-500">see more →</p>
      </RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
