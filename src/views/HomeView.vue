<script setup></script>

<template>
  <main class="grid grid-cols-12 gap-5 md:container">
    <div class="relative col-span-12">
      <img src="@/assets/img/hero.jpg" alt="hero-poster" class="grayscale" />
      <p
        class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 text-center text-[1.5rem] font-bold text-black mix-blend-exclusion drop-shadow-2xl sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
      >
        Elevate Your Movie Nights with Our Expert Recommendations!
      </p>
    </div>
    <div class="col-span-12 mb-8 mt-12 hidden border-b md:block"></div>
    <div class="container col-span-12 mt-8 md:mt-0">
      <h2 class="mb-4 text-4xl font-bold">Now in theaters</h2>
      <div class="grid grid-cols-12 gap-5">
        <img
          src="@/assets/img/nr_1.jpg"
          alt="movie cover"
          class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
        />
        <img
          src="@/assets/img/nr_2.jpg"
          alt="movie cover"
          class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
        />
        <img
          src="@/assets/img/nr_3.jpg"
          alt="movie cover"
          class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
        />
        <img
          src="@/assets/img/nr_4.jpg"
          alt="movie cover"
          class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3"
        />
      </div>
    </div>
    <div class="col-span-12 mb-8 mt-12 border-b"></div>
    <div class="container col-span-12">
      <h2 class="mb-4 text-4xl font-bold">Upcoming movies</h2>
      <div class="grid grid-cols-12 gap-5">
        <img src="@/assets/img/nr_1.jpg" alt="movie cover" class="col-span-3" />
        <img src="@/assets/img/nr_2.jpg" alt="movie cover" class="col-span-3" />
        <img src="@/assets/img/nr_3.jpg" alt="movie cover" class="col-span-3" />
        <img src="@/assets/img/nr_4.jpg" alt="movie cover" class="col-span-3" />
      </div>
    </div>
  </main>
</template>
