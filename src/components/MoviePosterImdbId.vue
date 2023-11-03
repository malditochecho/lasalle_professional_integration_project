<script setup>
import { onMounted, ref } from 'vue'
import { useApi } from '@/composables/api.js'
import MoviePoster from '@/components/MoviePoster.vue'

const props = defineProps(['imdbId'])
const tmdbId = ref('')
const movie = ref(null)
onMounted(async () => {
  const external = await useApi(`https://api.themoviedb.org/3/movie/${props.imdbId}/external_ids`)
  external.error.value ? console.log(external.error.value) : (tmdbId.value = external.data.value.id)
  const movieDetail = await useApi(`https://api.themoviedb.org/3/movie/${tmdbId.value}`)
  movieDetail.error.value
    ? console.log(movieDetail.error.value)
    : (movie.value = movieDetail.data.value)
})
</script>

<template>
  <div>
    <RouterLink
      v-if="movie"
      :to="{ name: 'moviedetail', params: { id: movie.id } }"
      class="col-span-6 aspect-[2/3] object-cover sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
    >
      <MoviePoster :path="movie?.poster_path" quality="w500" />
    </RouterLink>
  </div>
</template>

<!-- "w92", "w154", "w185", "w342", "w500", "w780", "original" -->
