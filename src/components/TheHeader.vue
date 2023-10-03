<script setup></script>

<template>
  <div class="mb-8 w-full border-b">
    <header class="container my-4 flex items-center justify-between">
      <RouterLink to="/">
        <p class="text-6xl">🎬</p>
      </RouterLink>
      <nav>
        <ul>
          <li class="flex items-center justify-center">
            <div>
              <p class="text-md mr-2 text-right font-sans font-thin">you're not registered?</p>
              <p class="text-md mr-2 text-right font-sans font-light">click the monkey</p>
            </div>
            <RouterLink to="/signup">
              <span class="text-5xl">🙈</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
