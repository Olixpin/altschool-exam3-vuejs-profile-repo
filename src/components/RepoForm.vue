<template>
  <form class="mb-4 mt-4" @submit="handleSearch">
    <label htmlFor="search" class="sr-only"> Search Repositories </label>
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Find a repository..."
      :value="value"
      @input="setValue($event.target.value)"
      class="border border-grey-200 rounded-md w-[75%] md:w-[65%] px-2 py-1 text-zinc-700"
    />
    <button
      type="submit"
      class="bg-dark-yellow text-neutral-50 ml-3 px-2 py-1 rounded-md text-sm md:text-lg"
    >
      Search
    </button>
  </form>
</template>
<script setup>
const handleSearch = (e) => {
  e.preventDefault();
};

defineProps({
  value: {
    type: String,
    required: true,
    default: "",
  },

  setValue: {
    type: Function,
    required: true,
    default: () => {},
  },
});
</script>
