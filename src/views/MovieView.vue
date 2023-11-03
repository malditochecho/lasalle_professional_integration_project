<script setup>
import { onMounted, ref } from 'vue'
import PillGenre from '@/components/PillGenre.vue'
import MovieListSimilar from '@/components/MovieListSimilarMovies.vue'
import MoviePoster from '@/components/MoviePoster.vue'
import { useApi } from '@/composables/api.js'
import { useRoute } from 'vue-router'
const route = useRoute()

// fetch movie details from api
const url = ref('')
const movie = ref(null)
url.value = `https://api.themoviedb.org/3/movie/${route.params.id}`
onMounted(async () => {
  const { data, error } = await useApi(url.value)
  error.value ? console.log(error.value) : (movie.value = data.value)
})
</script>

<template>
  <div class="container mt-8 md:mt-0">
    <div class="grid grid-cols-12 gap-5" v-if="movie">
      <!-- poster -->
      <div class="col-span-12 sm:col-span-6">
        <MoviePoster
          :path="movie.poster_path"
          quality="original"
          class="col-span-12 aspect-[2/3] object-cover sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
        />
      </div>

      <!-- movie details -->
      <div class="col-span-12 sm:col-span-6">
        <!-- year -->
        <h1 class="text-xs font-bold tracking-wide text-gray-400 sm:text-lg">
          {{ movie?.release_date.split('-')[0] }}
        </h1>
        <!-- title -->
        <h1 class="text-2xl font-bold sm:text-4xl">{{ movie?.title }}</h1>
        <h3 v-if="movie?.tagline" class="font-serif italic text-gray-500">
          "{{ movie?.tagline }}"
        </h3>
        <!-- genres -->
        <div class="mb-8 mt-2 flex space-x-2">
          <RouterLink
            v-for="genre in movie?.genres"
            :key="genre.id"
            :to="{
              name: 'movielist',
              params: { name: genre.name.toLowerCase().replace(/ /g, '') }
            }"
            class="col-span-3 sm:col-span-2 md:col-span-1"
          >
            <PillGenre :genre="genre" />
          </RouterLink>
        </div>
        <!-- overview -->
        <div class="mb-8">
          <p class="mb-2 text-xl font-bold">Cast</p>
        </div>
        <!-- overview -->
        <div>
          <p class="mb-2 text-xl font-bold">Overview</p>
          <p class="tracking-snug leading-relaxed">{{ movie?.overview }}</p>
        </div>
      </div>

      <!-- related movies -->
      <div class="col-span-12">
        <MovieListSimilar :movieId="movie?.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
