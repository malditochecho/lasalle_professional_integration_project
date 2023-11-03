<script setup>
import { ref } from 'vue'
// const props = defineProps(['path', 'quality'])
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  quality: {
    validator(value) {
      return ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'].includes(value)
    },
    type: String,
    required: true
  }
})

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
      :src="`https://image.tmdb.org/t/p/${props.quality}${props.path}`"
      alt="movie cover"
      @error="setAltImg"
    />
    <img v-if="error" :src="altImg" alt="movie cover" />
  </div>
</template>

<!-- "w92", "w154", "w185", "w342", "w500", "w780", "original" -->
