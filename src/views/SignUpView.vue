<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import LineDivider from '@/components/LineDivider.vue'

// pinia
const authStore = useAuthStore()

// data
const email = ref('')
const password = ref('')
const router = useRouter()

// methods
const registerWithGoogle = async () => {
  await authStore.authenticateWithGoogle()
  router.push('/')
}
const registerWithEmailAndPassword = async () => {
  await authStore.registerWithEmailAndPassword(email.value, password.value)
  router.push('/')
}
</script>

<template>
  <main class="container mt-8 w-96 px-8 text-center">
    <h2 class="mb-4 text-4xl font-bold">Welcome</h2>
    <div class="mb-4 w-auto space-y-2">
      <input
        v-model="email"
        class="w-full rounded border px-3 py-2 shadow-inner"
        type="email"
        placeholder="email"
      />
      <input
        v-model="password"
        class="w-full rounded border px-3 py-2 shadow-inner"
        type="password"
        placeholder="password"
      />
      <button
        type="submit"
        @click.stop="registerWithEmailAndPassword"
        class="w-full rounded bg-gray-800 px-3 py-2 text-white hover:bg-gray-600"
      >
        Create account
      </button>
    </div>
    <p class="my-6 font-extralight">or</p>
    <button
      @click.stop="registerWithGoogle"
      type="button"
      class="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50"
    >
      <svg
        class="-ml-1 mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>
      Sign up with Google
    </button>
    <LineDivider />
    Already have an account?
    <span class="font-medium text-blue-500 underline">
      <RouterLink to="/signin"> Sign in </RouterLink>
    </span>
  </main>
</template>

<style lang="scss" scoped></style>
