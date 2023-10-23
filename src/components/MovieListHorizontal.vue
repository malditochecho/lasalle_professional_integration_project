<script setup>
import { onMounted, ref } from 'vue'
import { useApi } from '@/composables/api.js'

// decide what to fetch from the props
const props = defineProps(['type'])
const sectionTitle = ref('')
const url = ref('')
onMounted(() => {
  switch (props.type) {
    case 'upcoming':
      sectionTitle.value = 'Now in theaters'
      url.value = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
      break
    case 'playing':
      sectionTitle.value = 'Upcoming movies'
      url.value = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
      break
  }
})

// fetch movies from api
const movies = ref([])
onMounted(async () => {
  const { data, error } = await useApi(url.value)
  error.value ? console.log(error.value) : (movies.value = data.value.results)
})
</script>

<template>
  <div class="container col-span-12 mt-8 md:mt-0">
    <h2 class="mb-4 text-4xl font-bold">{{ sectionTitle }}</h2>
    <div class="grid grid-cols-12 gap-5">
      <img
        v-for="movie in movies"
        :key="movie"
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        alt="movie cover"
        class="col-span-6 aspect-[2/3] object-cover sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
      />
    </div>
  </div>
</template>
