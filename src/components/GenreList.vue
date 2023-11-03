<script setup>
import { ref } from 'vue'

const genres = ref([
  'action',
  'adventures',
  'animation',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'fantasy',
  'history',
  'horror',
  'music',
  'romance',
  'sciencefiction',
  'thriller',
  'western'
])
</script>

<template>
  <div class="container col-span-12 mt-8 md:mt-0">
    <h2 class="mb-8 text-4xl font-bold">Discover the best movies by genre</h2>
    <div class="grid grid-cols-12 gap-5">
      <RouterLink
        v-for="genre in genres"
        :key="genre"
        :to="{ name: 'movielist', params: { name: genre } }"
        class="col-span-3 sm:col-span-2 md:col-span-1"
      >
        <img
          :src="`src/assets/img/genres/${genre}.png`"
          :alt="`genre ${genre} icon`"
          :title="genre"
        />
      </RouterLink>
    </div>
  </div>
</template>
