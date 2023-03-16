<template>
  <section class="px-2">
    <div
      v-if="isLoading"
      class="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4"
    >
      <v-progress-circular
        indeterminate
        color="dark-yellow"
        class="mx-auto mt-10"
      ></v-progress-circular>
    </div>
    <div
      class="repo-container py-6 md:py-12 content mx-auto container px-8 max-[375px]:px-2 flex flex-col gap-4 max-[504px]:py-8"
    >
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mt-8 md:w-1/3">
          <img
            src="../assets/octocat.png"
            alt="github repo octocat"
            class="w-3/4 object-cover aspect-square md:mt-8"
          />
        </div>

        <div class="md:w-2/3 mt-4">
          <div>
            <div class="flex items-center gap-x-2">
              <img src="../assets/repo-icon.png" alt="" class="w-[24px]" />
              <h1 class="text-xl md:text-2xl text-sky-500">{{ repo?.name }}</h1>
              <p
                class="text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl"
              >
                {{ repo?.visibility }}
              </p>
            </div>

            <p class="text-sm mt-2">
              {{
                repo?.description === null
                  ? "No description"
                  : repo?.description
              }}
            </p>
          </div>

          <div class="space-y-4 mt-8">
            <p class="text-lg">
              Created on {{ convertDate(repo?.created_at) }}
            </p>
            <p>Updated on {{ convertDate(repo?.updated_at) }}</p>
            <p class="leading-[1.625rem] max-w-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nobis accusamus omnis ex exercitationem perspiciatis
              repellat vitae animi incidunt culpa numquam, eius asperiores ipsa
              rerum. Ipsa veniam doloremque dolorum architecto? Amet odit illum
              ab in, doloremque ullam, tenetur illo eos quaerat dicta quis
              facere, natus aspernatur beatae dolorem quod dolor reiciendis
              unde. Eaque, consectetur nisi quibusdam atque quisquam deserunt.
              Quam!
            </p>
            <div class="flex gap-2 items-center">
              <p class="flex gap-x-2 items-center text-3xl md:text-5xl">
                <span class="">
                  <AiOutlineStar />
                </span>
                <span class="text-xl md:text-2xl">
                  {{
                    repo?.parent
                      ? repo?.parent.stargazers_count
                      : repo?.stargazers_count
                  }}
                </span>
              </p>
              <p class="flex gap-x-2 items-center text-3xl md:text-5xl">
                <span class="">
                  <FiEye />
                </span>
                <span class="text-xl md:text-2xl">
                  {{
                    repo?.parent
                      ? repo?.parent.watchers_count
                      : repo?.watchers_count
                  }}
                </span>
              </p>
              <p class="flex gap-x-2 items-center text-3xl md:text-5xl">
                <span class="">
                  <BiGitRepoForked />
                </span>
                <span class="text-xl md:text-2xl">
                  {{
                    repo?.parent ? repo?.parent.forks_count : repo?.forks_count
                  }}
                </span>
              </p>
              <p>{{ repo?.languages }}</p>
            </div>
          </div>

          <div class="mt-4 flex gap-4">
            <a
              :href="repo?.html_url"
              class="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
              target="_blank"
            >
              Visit Page
            </a>
            <router-link
              to="/repos"
              class="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
            >
              Back to Repo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const { name } = useRoute().params;
const repo = ref(null);
const loading = ref(false);

const store = useStore();

const router = useRouter();

onMounted(async () => {
  try {
    loading.value = true;
    await store.dispatch("getRepo", { username: "olixpin", repo: name });
    repo.value = store.state.repo || {};
    loading.value = false;
  } catch (err) {
    console.log(err);
    repo.value = null;
    router.push("/:username");
  }
});

const convertDate = (date) => {
  const [weekday, month, day, year, time, timezone] = new Date(date)
    .toString()
    .split(" ");

  return `${day} ${month} ${year} ${time} ${timezone}`;
};
</script>
