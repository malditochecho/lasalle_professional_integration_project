<script setup></script>

<template>
  <header class="flex justify-between my-8 container">
    <RouterLink to="/">
      <p class="text-5xl">🎬</p>
    </RouterLink>
    <nav>
      <ul>
        <li class="flex justify-center items-center">
          <div>
            <p class="text-lg font-sans font-thin text-right mr-2">you're not registered?</p>
            <p class="text-lg font-sans font-light text-right mr-2">click the monkey</p>
          </div>
          <RouterLink to="/signup">
            <span class="text-6xl">🙈</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
