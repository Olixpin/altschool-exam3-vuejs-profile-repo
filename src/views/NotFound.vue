<template>
  <div
    class="bg-gray-100 h-[calc(100vh-4rem)] flex items-center justify-center bg-dark-yellow"
  >
    <main class="px-0">
      <router-view>
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-4xl font-bold">404</h1>
          <p class="text-xl">Page not found</p>
        </div>
      </router-view>
    </main>
  </div>
</template>

<script setup></script>
