<template>
  <main className="md:col-span-2">
    <h1
      className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
    >
      Repositories
    </h1>
    <repo-form :value="search" :setValue="setValue"></repo-form>
    <ul className="text-repoColor dark:text-[#d9cccc] mt-8">
      <repo-card
        v-for="repo in filteredRepos.slice(start, end)"
        :key="repo.id"
        :repo="repo"
      ></repo-card>
    </ul>
    <div v-if="filteredRepos.length === 0" class="">
      <p class="text-neutral-500 dark:text-neutral-400">
        No repositories found
      </p>
    </div>
    <div
      class="flex flex-col items-start gap-y-3 md:flex-row justify-between md:items-center py-8 border-t border-grey-200"
      :class="{ hidden: search !== '' }"
    >
      <div class="flex items-center gap-x-2">
        <button
          class="px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5]"
          :class="{ d: page === 1 }"
          @click="page > 1 ? page-- : ''"
        >
          Prev
        </button>

        <div class="">
          <p class="text-neutral-500 dark:text-neutral-400">
            Page {{ page }} of {{ pageLength }}
          </p>
        </div>

        <!-- create buttons of numbers -->
        <button
          v-for="num in pageLength"
          :key="num"
          class="px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5]"
          :class="{ 'bg-neutral-200': num === page }"
          @click="page = num"
        >
          {{ num }}
        </button>
        <button
          class="px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5]"
          @click="page < pageLength ? page++ : ''"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import RepoForm from "./RepoForm.vue";
import RepoCard from "./RepoCard.vue";
import { ref, onMounted, watchEffect, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const repos = ref([]);
const isLoading = ref(false);
const error = ref(null);

const search = ref("");

const setValue = (value) => {
  search.value = value;
};

onMounted(async () => {
  isLoading.value = true;
  try {
    await store.dispatch("fetchRepos", "olixpin");
    repos.value = store.state.repos;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
});

const page = ref(1);
const perPage = ref(8);
const total = ref(0);
let start = (page.value - 1) * perPage.value;
let end = page.value * perPage.value;

let pageLength = Math.ceil(total.value / perPage.value);

const filteredRepos = computed(() => {
  return repos.value.filter((repo) => {
    return repo.name.toLowerCase().includes(search.value.toLowerCase());
  });
});

watchEffect(() => {
  total.value = filteredRepos.value.length;
  pageLength = Math.ceil(total.value / perPage.value);
  start = (page.value - 1) * perPage.value;
  end = page.value * perPage.value;
});

watchEffect(() => {
  console.log(page.value, start, end);
});
</script>
