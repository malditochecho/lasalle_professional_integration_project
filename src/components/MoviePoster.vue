<script setup>
import { ref } from 'vue'
const props = defineProps(['path'])

const altImg = ref('https://via.placeholder.com/500x750?text=No+image+available')
const error = ref(false)
function setAltImg() {
  error.value = true
}
</script>

<template>
  <div>
    <img
      v-if="!error"
      :src="`https://image.tmdb.org/t/p/w500/${props.path}`"
      alt="movie cover"
      @error="setAltImg"
    />
    <img v-if="error" :src="altImg" alt="movie cover" />
  </div>
</template>
