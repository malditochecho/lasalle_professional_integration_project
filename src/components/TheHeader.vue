<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

const isLoggedIn = ref(false)

const signout = () => {
  signOut(getAuth()).then(() => {
    isLoggedIn.value = false
    useRouter().push('/')
  })
}

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    isLoggedIn.value = !!user
  })
})
</script>

<template>
  <div class="mb-8 w-full border-b">
    <header class="container my-4 flex items-center justify-between">
      <RouterLink to="/">
        <p class="text-6xl">🎬</p>
      </RouterLink>
      <nav class="flex items-center justify-center space-x-4">
        <div
          v-if="isLoggedIn"
          class="rounded-full border-4 border-gray-500 bg-blue-300 object-cover text-center"
        >
          <RouterLink to="/profile">
            <span class="text-6xl">🦸</span>
          </RouterLink>
        </div>
        <div class="flex items-center justify-center" v-if="!isLoggedIn">
          <div>
            <p class="text-md mr-2 text-right font-sans font-thin">you're not registered?</p>
            <p class="text-md mr-2 text-right font-sans font-light">click the monkey</p>
          </div>
          <RouterLink to="/signup">
            <span class="text-5xl">🙈</span>
          </RouterLink>
        </div>
        <button @click.stop="signout" v-if="isLoggedIn">
          <span class="text-4xl">✌️</span>
        </button>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
