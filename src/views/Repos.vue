<template>
  <div v-if="isLoading">Loading...</div>

  <section v-else class="px-2 bg-grey-light-100">
    <div
      class="content mx-auto container px-8 max-[375px]:px-2 flex flex-col gap-4 max-[504px]:py-8 py-8"
    >
      <div class="md:grid md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-x-8">
        <div class="aside md:h-screen border-r-grey-200 border-r-[.5px] pr-8">
          <div class="flex gap-x-4 items-center md:flex-col md:items-start">
            <img
              :src="profile?.avatar_url"
              alt="Olixpin"
              class="w-12 aspect-square object-cover rounded-full md:w-64"
            />
            <div>
              <h1 class="flex flex-col py-4">
                <span class="text-[1.5rem] font-semibold">{{
                  profile?.name
                }}</span>
                <span>{{ profile?.login }}</span>
              </h1>
            </div>
          </div>
          <div class="space-y-3 mt-2">
            <h2 class="text-xl">{{ profile?.bio }}</h2>
            <div class="flex gap-x-4 items-center">
              <!-- <CiMail class="mt-[0.4rem]" /> -->
              <img src=".././assets/email.svg" alt="" class="mt-[0.4rem]" />
              <a href="mailto:noibiabdulrasaq@gmail.com"
                >noibiabdulrasaq@gmail.com</a
              >
            </div>
            <div class="flex gap-x-4 items-center">
              <img src=".././assets/follower.svg" alt="" class="mt-[0.4rem]" />
              <p>
                {{ profile?.followers }} followers.
                {{ profile?.following }} following
              </p>
            </div>
          </div>
          <div
            class="mt-10 pt-4 border-t border-neutral-100 dark:border-neutral-400"
          >
            <h2 class="font-semibold mb-2">Achievements</h2>
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
              alt=""
              class="aspect-square rounded-full w-16"
            />
          </div>
        </div>
        <!-- main -->
        <repo-main></repo-main>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import RepoMain from "../components/RepoMain.vue";

const store = useStore();
const repos = ref([]);
const isLoading = ref(false);
const error = ref(null);

const profile = ref(null);
const isProfileLoading = ref(false);
const profileError = ref(null);

onMounted(async () => {
  isLoading.value = true;
  try {
    await store.dispatch("fetchRepos", "olixpin");
    repos.value = store.state.repos;
    console.log(repos.value);
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
});

onMounted(async () => {
  isProfileLoading.value = true;
  try {
    await store.dispatch("fetchProfile", "olixpin");
    profile.value = store.state.profile;
    console.log(profile.value);
  } catch (err) {
    profileError.value = err.message;
  } finally {
    isProfileLoading.value = false;
  }
});
</script>
