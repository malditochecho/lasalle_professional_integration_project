<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['type'])

const url = ref('')
const sectionTitle = ref('')
const movies = ref([])

onMounted(async () => {
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
  await fetchMovies()
})

const fetchMovies = async () => {
  // TMDB > MOVIE LISTS > Now Playing
  const bearer = `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
  const response = await fetch(url.value, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: bearer
    }
  })
  const data = await response.json()
  const results = data?.results
  movies.value = results
}
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
