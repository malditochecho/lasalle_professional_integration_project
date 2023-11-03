<script setup>
const props = defineProps(['genre'])
</script>

<template>
  <div class="flex rounded-full bg-gray-800 px-3 py-1 text-white">
    <span class="text-xs font-medium tracking-wider">{{ props?.genre?.name }}</span>
  </div>
</template>
