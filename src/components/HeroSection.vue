<script setup>
import { ref } from 'vue'

const text = ref('Elevate Your Movie Nights with Our Expert Recommendations!')
const image = ref('src/assets/img/hero.jpg')
</script>

<template>
  <div class="relative col-span-12">
    <img :src="image" alt="hero-poster" class="grayscale" />
    <p
      class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 text-center text-[1.5rem] font-bold text-black mix-blend-exclusion drop-shadow-2xl sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
    >
      {{ text }}
    </p>
  </div>
</template>
