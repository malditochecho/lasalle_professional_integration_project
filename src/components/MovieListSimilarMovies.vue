<script setup>
import { onMounted, ref } from 'vue'
import MoviePoster from '@/components/MoviePoster.vue'
import LineDivider from '@/components/LineDivider.vue'
import { useApi } from '@/composables/api.js'

const props = defineProps(['movieId'])
const url = ref(`https://api.themoviedb.org/3/movie/${props.movieId}/similar`)
const movies = ref([])
onMounted(async () => {
  const { data, error } = await useApi(url.value)
  error.value
    ? console.log(error.value)
    : (movies.value = data?.value?.results
        ?.sort((a, b) => {
          return b.popularity - a.popularity
        })
        .slice(0, 4))
})
</script>

<template>
  <div v-if="movies.length">
    <LineDivider />
    <h2 class="col-span-12 mb-2 text-xl font-bold">Similar movies</h2>
    <div class="grid grid-cols-12 gap-5">
      <RouterLink
        v-for="movie in movies"
        :key="movie.id"
        :to="{ name: 'moviedetail', params: { id: movie.id } }"
        class="col-span-6 aspect-[2/3] object-cover sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
      >
        <MoviePoster :path="movie.poster_path" quality="w342" />
      </RouterLink>
    </div>
  </div>
</template>
