<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-dark-teal shadow h-16 px-2 flex">
      <div
        class="header-wrapper mx-auto container flex items-center justify-between px-8 max-[375px]:px-2 w-full"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full px-0"
        >
          <img src="./assets/logo.svg" alt="Logo" class="h-8" />
        </router-link>

        <navigation class="flex gap-4 text-dark-yellow">
          <router-link :to="{ name: 'Home' }"> Home </router-link>
          <router-link :to="{ name: 'About' }"> About </router-link>
          <router-link :to="{ name: 'Repos' }"> Repos </router-link>
        </navigation>
      </div>
    </header>

    <main class="px-0"><router-view></router-view></main>
  </div>
</template>

<script setup></script>
