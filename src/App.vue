<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

// pinia
const authStore = useAuthStore()

onMounted(() => {
  const currentUser = ref(localStorage.getItem('currentUser') || null)
  if (currentUser.value) authStore.user = JSON.parse(currentUser.value)
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />
    <div class="mt-0 flex-grow md:mt-8">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
