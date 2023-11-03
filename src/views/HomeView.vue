<script setup>
import MovieListHorizontal from '@/components/MovieListHorizontal.vue'
import HeroSection from '@/components/HeroSection.vue'
import GenreList from '@/components/GenreList.vue'
import LineDivider from '@/components/LineDivider.vue'
</script>

<template>
  <main class="grid grid-cols-12 gap-5 md:container">
    <HeroSection />
    <LineDivider />
    <GenreList />
    <LineDivider />
    <MovieListHorizontal type="upcoming" />
    <LineDivider />
    <MovieListHorizontal type="playing" />
  </main>
</template>
