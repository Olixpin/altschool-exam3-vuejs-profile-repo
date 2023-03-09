<script setup></script>

<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link to="/">
        <!-- <img
          class="h-16 w-16 float-left"
          src="https://www.vuemastery.com/images/challenges/vuemasterylogo.svg"
        /> -->
        Home
      </router-link>
    </header>
    <main><router-view></router-view></main>
  </div>
</template>
