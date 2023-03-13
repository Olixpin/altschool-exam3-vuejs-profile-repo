<template>
  <li class="py-6 border-t border-grey-200 flex justify-between items-center">
    <div class="">
      <div className="flex gap-x-2 items-center">
        <router-link :to="{ name: 'Repo', params: { id: repo.id } }">
          <h2 class="text-lg font-semibold">{{ repo.name }}</h2>
        </router-link>
        <p
          className="text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl"
        >
          {{ repo.visibility }}
        </p>
      </div>
      <div>
        <p className="mt-2 pr-4 md:pr-0 text-sm">
          {{ repo.description === null ? "No description" : repo.description }}
        </p>
      </div>
      <div className="flex gap-x-4 mt-4 items-center">
        <div v-if="repo.language" className="flex gap-x-2 items-center">
          <div
            className="w-3 h-3 rounded-full"
            :style="{ backgroundColor: colors[repo.language.toLowerCase()] }"
          ></div>
          <p>{{ repo.language }}</p>
        </div>
        <div v-if="repo.forks_count > 0" className="flex gap-x-2 items-center">
          <img src="../assets/fork.svg" alt="github-star" />
          <p>{{ repo.forks_count }}</p>
        </div>
        <div
          v-if="repo.open_issues_count > 0"
          className="flex gap-x-2 items-center"
        >
          <img src=".././assets/github-star.svg" alt="" />
          <p>{{ repo.open_issues_count }}</p>
        </div>

        <!-- add time -->
        <div className="flex gap-x-2 items-center">
          <p class="text-xs">
            Updated on {{ updateTimeFormat(repo.updated_at) }}
          </p>
        </div>
      </div>
    </div>

    <button
      className="flex items-center px-4 py-[0.25rem] gap-x-3 bg-neutral-200 rounded-md border border-grey-200  transition-all duration-300 hover:bg-[#E5E5E5]"
      @click="handleStar"
    >
      <svg
        v-if="!stared"
        stroke="#777"
        fill="#ddd"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
        ></path>
      </svg>
      <svg
        v-else
        stroke=""
        fill="#FFB633"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
        ></path>
      </svg>
      Star
    </button>
  </li>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";

defineProps({
  repo: {
    type: Object,
    required: true,
  },
});

const colors = ref({
  html: "#e34c26",
  css: "#563d7c",
  javascript: "#f1e05a",
  python: "#3572a5",
  java: "#b07219",
  c: "#555555",
  vue: "#2c3e50",
});

const stared = ref(false);

const handleStar = () => {
  stared.value = !stared.value;
};

const updateTimeFormat = (mountedTime) => {
  const time = new Date(mountedTime);
  const now = new Date();
  const diff = now - time;
  const diffInSec = diff / 1000;
  const diffInMin = diffInSec / 60;
  const diffInHour = diffInMin / 60;
  const diffInDay = diffInHour / 24;
  const diffInMonth = diffInDay / 30;
  const diffInYear = diffInMonth / 12;

  if (diffInSec < 60) {
    return `${Math.floor(diffInSec)} seconds ago`;
  } else if (diffInMin < 60) {
    return `${Math.floor(diffInMin)} minutes ago`;
  } else if (diffInHour < 24) {
    return `${Math.floor(diffInHour)} hours ago`;
  } else if (diffInDay < 30) {
    return `${Math.floor(diffInDay)} days ago`;
  } else if (diffInMonth < 12) {
    return `${Math.floor(diffInMonth)} months ago`;
  } else {
    return `${Math.floor(diffInYear)} years ago`;
  }
};
</script>
