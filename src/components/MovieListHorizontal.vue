<script setup>
import { onMounted, ref } from 'vue'
import { useApi } from '@/composables/api.js'
import MoviePoster from '@/components/MoviePoster.vue'

// decide what to fetch from the props
const props = defineProps(['type'])
const sectionTitle = ref('')
const url = ref('')
onMounted(() => {
  switch (props.type) {
    case 'upcoming':
      sectionTitle.value = 'Playing now in theaters'
      url.value = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=CA'
      break
    case 'playing':
      sectionTitle.value = 'Upcoming movies'
      url.value = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=CA'
      break
  }
})

// fetch movies from api
const movies = ref([])
onMounted(async () => {
  const { data, error } = await useApi(url.value)
  error.value
    ? console.log(error.value)
    : (movies.value = data.value.results
        ?.sort((a, b) => {
          return b.popularity - a.popularity
        })
        .slice(0, 4))
})
</script>

<template>
  <div class="container col-span-12 mt-8 md:mt-0">
    <h2 class="mb-4 text-4xl font-bold">{{ sectionTitle }}</h2>
    <div class="grid grid-cols-12 gap-5">
      <RouterLink
        v-for="movie in movies"
        :key="movie.id"
        :to="{ name: 'moviedetail', params: { id: movie.id } }"
        class="col-span-6 aspect-[2/3] object-cover sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
      >
        <MoviePoster :path="movie.poster_path" quality="w342" />
      </RouterLink>
    </div>
    <RouterLink :to="`/list/${props.type}`">
      <p class="mt-4 text-right font-medium uppercase text-blue-500">see more →</p>
    </RouterLink>
  </div>
</template>
