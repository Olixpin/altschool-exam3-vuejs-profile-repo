<template>
  <section class="px-2 bg-grey-light-100">
    <div
      class="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4"
    >
      <div
        class="bg-white px-2 py-2 gap-2 rounded-full flex justify-between animate-bounce"
      >
        <div
          class="image h-12 w-12 rounded-full bg-dark-yellow flex items-center justify-center"
        ></div>
        <h2 class="flex items-center justify-center">Hi I am Olix 👋</h2>
      </div>

      <h1
        class="text-5xl text-center font-normal max-md:text-3xl max-sm:text-2xl"
      >
        Welcome to talentless <br class="br" />Developer's Repositories
      </h1>
      <button class="bg-dark-yellow px-8 py-2 font-bold mt-8 rounded-full">
        <router-link to="/repos">Go to Repos</router-link>
      </button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.image {
  background-image: url(../assets/olix.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 728px) {
  .br {
    display: none;
  }
}
</style>
