<script setup>
import { onMounted, ref } from 'vue'
import { useListsStore } from '@/stores/lists'
import { useRoute } from 'vue-router'
import MoviePosterImdbId from '../components/MoviePosterImdbId.vue'

// fetch list from firestore
const route = useRoute()
const movieListStore = useListsStore()
const list = ref([])
onMounted(async () => {
  list.value = await movieListStore.fetchList(route.params.name)
})
</script>

<template>
  <div class="container col-span-12 mt-8 md:mt-0">
    <h1 class="mb-4 text-4xl font-bold">Best {{ route.params.name }} movies</h1>
    <p class="tracking-snug mb-12 text-lg font-light italic leading-relaxed">
      "...thriller movies excel at keeping audiences engaged and thrilled by seamlessly blending
      suspense, mystery, and tension. Their ability to create unpredictability and intense emotional
      responses, while often delving into complex psychological dilemmas, makes them a favorite
      genre for those seeking an exhilarating and unforgettable cinematic experience..."
    </p>
    <ul v-if="list" class="grid grid-cols-12 gap-5">
      <li v-for="imdbId in list" :key="imdbId" class="col-span-6 md:col-span-4">
        <MoviePosterImdbId :imdbId="imdbId" />
      </li>
    </ul>
  </div>
</template>
