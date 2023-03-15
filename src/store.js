import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    repos: [],
    profile: {},
    repo: {},
  },
  mutations: {
    setRepos(state, repos) {
      state.repos = repos;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },

    setRepo(state, repo) {
      state.repo = repo;
    },
  },
  actions: {
    async fetchRepos({ commit }, username) {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      commit("setRepos", response.data);
    },

    async fetchProfile({ commit }, username) {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      commit("setProfile", response.data);
    },

    async getRepo({ commit }, { username, repo }) {
      const response = await axios.get(
        `https://api.github.com/repos/${username}/${repo}`
      );
      commit("setRepo", response.data);
    },
  },
});

//  `https://api.github.com/users/${username}/repos?page=2&per_page=10`;
