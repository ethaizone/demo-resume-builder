<template>
  <div class="sticky top-0 z-40">
    <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex gap-2">
        <div class="sidebar-menu-item">
          <span class="text-gray-700">Home</span>
        </div>

        <RouterLink to="/print/preview">
          <div class="sidebar-menu-item">
            <span class="text-gray-700">Preview #1</span>
          </div>
        </RouterLink>
        <RouterLink to="/print/preview?template=redbar">
          <div class="sidebar-menu-item">
            <span class="text-gray-700">Preview #2</span>
          </div>
        </RouterLink>
      </div>

      <!-- right navbar -->
      <div class="flex items-center relative">
        <!-- leave it as blank -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.sidebar-menu-item {
  @apply flex items-center text-blue-400 pl-4 pr-4 h-10 hover:bg-gray-200 rounded-lg cursor-pointer;
}
</style>
