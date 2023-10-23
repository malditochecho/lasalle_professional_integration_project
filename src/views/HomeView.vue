<script setup>
import MovieListHorizontal from '@/components/MovieListHorizontal.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <main class="grid grid-cols-12 gap-5 md:container">
    <HeroSection />
    <div class="col-span-12 mb-8 mt-12 hidden border-b md:block"></div>
    <MovieListHorizontal type="upcoming" />
    <div class="col-span-12 mb-8 mt-12 border-b"></div>
    <MovieListHorizontal type="playing" />
  </main>
</template>
