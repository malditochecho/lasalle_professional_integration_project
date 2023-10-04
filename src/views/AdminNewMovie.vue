<script setup></script>

<template>
  <main class="container mt-8 space-y-8">
    <div class="grid grid-cols-12 gap-5 border p-8">
      <h2 class="col-span-12 mb-8 text-center text-3xl font-light">
        you can add the movie details manually
      </h2>
      <button class="col-span-12 justify-self-center text-center md:col-span-6 md:justify-self-end">
        <div class="relative aspect-[2/3] h-96 border border-gray-300 bg-gray-200 shadow-inner">
          <p
            class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-xs text-gray-600"
          >
            <span class="text-xl font-bold"> + </span>
            <br />
            <span class="font-bold">Choose a file </span>
            <span>or drag it here</span>
          </p>
        </div>
      </button>
      <div
        class="col-span-12 flex flex-col space-y-2 justify-self-center md:col-span-6 md:justify-self-start"
      >
        <p class="text-xl font-bold">Movie details</p>
        <input type="text" placeholder="Title" class="w-64 rounded border px-2 py-1" />
        <input type="text" placeholder="Year" class="w-64 rounded border px-2 py-1" />
        <input type="text" placeholder="Genre" class="w-64 rounded border px-2 py-1" />
        <button
          class="w-64 cursor-pointer bg-emerald-500 px-3 py-2 text-center text-white hover:bg-emerald-400"
        >
          Save
        </button>
      </div>
    </div>
    <p class="my-6 text-center font-extralight">or</p>
    <div class="grid grid-cols-12 gap-5 border p-8">
      <h2 class="col-span-12 mb-8 text-center text-3xl font-light">
        you can add the movie by searching the title (easier)
      </h2>
      <div class="col-span-12 justify-self-center">
        <input type="text" class="w-64 border px-2 py-2" placeholder="movie title" />
        <button
          class="w-24 cursor-pointer border border-emerald-400 bg-emerald-500 px-3 py-2 text-center text-white hover:bg-emerald-400"
        >
          search
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
