<script setup>
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('sergrodrig@gmail.com')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('welcome back!')
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage.value = 'Invalid email.'
          break
        case 'auth/user-not-found':
          errorMessage.value = 'User not found.'
          break
        case 'auth/wrong-password':
          errorMessage.value = 'Wrong password.'
          break
        default:
          errorMessage.value = 'Email or password was incorrect.'
      }
    })
}

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider).then((result) => {
    const user = result.user
    console.log(user)
    router.push('/')
  })
}
</script>

<template>
  <main class="container mt-32 w-96 text-center">
    <h2 class="mb-8 text-4xl font-bold">Welcome back</h2>
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
        @click.stop="login"
        class="w-full rounded bg-gray-800 px-3 py-2 text-white hover:bg-gray-600"
      >
        Sign in
      </button>
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p class="my-6 font-extralight">or</p>
    <button
      @click.stop="loginWithGoogle"
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
      Sign in with Google
    </button>
    <div class="my-4 border-b"></div>
    You don't have an account?
    <span class="font-medium text-blue-500 underline">
      <RouterLink to="/signup"> Sign Up </RouterLink>
    </span>
  </main>
</template>

<style lang="scss" scoped></style>
