<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// data
const router = useRouter()

// pinia
const authStore = useAuthStore()

// methods
const logout = async () => {
  await authStore.logout() // logout from firebase
  router.push('/') // redirect to home after logout
}

// computed
const isLoggedIn = computed(() => authStore.userIsLoggedIn) // to switch between login and logout button
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
            <img v-if="isLoggedIn" :src="authStore.user.photoURL" class="w-12 rounded-full" />
            <span v-else class="text-6xl">🦸</span>
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
        <button @click.stop="logout" v-if="isLoggedIn">
          <span class="text-4xl">✌️</span>
        </button>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
