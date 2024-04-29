<template>
  <div class="min-h-full leading-normal tracking-normal" v-if="isCssLoaded">
    <div class="flex flex-wrap">
      <div class="w-full bg-gray-100 pl-0 min-h-screen">
        <Navbar />

        <div class="p-6 bg-gray-100 mb-20 min-w-full">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './fragments/MainNavbar.vue'

// Create a ref to prevent display before css loaded
const isCssLoaded = ref(false)

// Dynamic css load to prevent it load on another route such as print
import('@/assets/main.css').then(() => {
  isCssLoaded.value = true
})
</script>
