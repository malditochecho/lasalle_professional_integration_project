<script setup></script>

<template>
  <main class="grid grid-cols-12 gap-5 md:container">
    <div class="relative col-span-12">
      <img src="@/assets/img/hero.jpg" alt="hero-poster" class="grayscale" />
      <p
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-serif text-5xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-[7rem] md:text-[7rem] lg:text-[8rem]"
      >
        hola
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
