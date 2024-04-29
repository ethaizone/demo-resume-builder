<template>
  <router-view v-if="isCssLoaded" id="printarea" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Create a ref to prevent display before css loaded
const isCssLoaded = ref(false)

// Dynamic css load to prevent it load on another route
// import('gutenberg-css/dist/gutenberg.css').then(() => {
//   isCssLoaded.value = true
// })

// I leave as historical record as I planned to use gutenberg but I don't have time to spend so fall back to tailwind
import('@/assets/main.css').then(() => {
  isCssLoaded.value = true
})
</script>
