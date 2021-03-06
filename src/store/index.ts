import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_HOST,
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.token}`;

instance.defaults.headers.common[
  "push"
] = `Bearer ${localStorage.push}`;

instance.defaults.headers.common[
  "info_push"
] = `Bearer ${localStorage.Local_info_push}`;

export default new Vuex.Store({
  state: {
    token: localStorage.token,
    push: localStorage.push,
    Local_info_push : localStorage.Local_info_push,
  },

  mutations: {
    setToken(state, value) {
      localStorage.token = value;
      instance.defaults.headers.common["Authorization"] = `Bearer ${value}`;
    },

    setPush(state, value) {
      localStorage.push = value;
      instance.defaults.headers.common["push"] = `Bearer ${value}`;
    },

    setInfoPush(state, value) {
      localStorage.Local_info_push = value;
      instance.defaults.headers.common["info_push"] = `Bearer ${value}`;
    },
  },

  actions: {
    async login({ state, commit, rootState }, params) {
      const { data } = await instance.post("/login", params);
      const token = data.success ? data.token : "";
      commit("setToken", token);
      return data;
    },

    async registration({ state, commit, rootState }, params) {
      const { data } = await instance.post("/registration", params);
      const token = data.success ? data.token : "";
      commit("setToken", token);
      return data;
    },

    async create_new({ state, commit, rootState }, params) {
      const { data } = await instance.post("/news/create", params);
      return data;
    },

    async delete_new({ state, commit, rootState }, params) {
      const url = "/news/delete/" + params
      const { data } = await instance.delete(url);
      return data;
    },

    async delete_profil({ state, commit, rootState }, params) {
      const url = "/users/delete_profil/" + params
      const { data } = await instance.delete(url);
      commit("setToken", "");
      return data;
    },

    async me_inform({ state, commit, rootState }) {
      const { data } = await instance.get("/users/me_inform");
      // const token = data.success ? data.token : "";
      // commit("setToken", "");
      return data;
    },

    async logout({ state, commit, rootState }) {
      const { data } = await instance.get("/users/logout");
      commit("setToken", "");
      return data;
    },

    async usersList({ state }, params) {
      const { data } = await instance.get("/users");
      return data;
    },

    async newsList({ state }, params) {
      const { data } = await instance.get("/news");
      return data;
    },

    async create_person({ state, commit, rootState }, params) {
      const { data } = await instance.post("/users/create", params);
      return data;
    },

    async edit_pass({ state, commit, rootState }, params) {
      const { data } = await instance.put("/users/update", params);
      return data;
    },

    async get_analitic({ state, commit, rootState }, params) {
      const { data } = await instance.post("/users/statistics", params);
      return data;
    },

    async inform_person({ state, commit, rootState }, params) {
      const url = "/users/inform/" + params
      const { data } = await instance.get(url);
      return data;
    },

    async edit_inform_person({ state, commit, rootState }, {params, form}) {
      const url = "/users/full_update/" + params
      const { data } = await instance.put(url, form);
      return data;
    },

    ////////////////////////////////////////////////////////////////////////////////////

    async show_push({ state, commit, rootState }, params) {
      // const { data } = await instance.post("/users/statistics", params);
      commit("setPush", params);
      return params;
    },

    async add_info_push({ state, commit, rootState }, params) {
      // const { data } = await instance.post("/users/statistics", params);
      commit("setInfoPush", params);
      return params;
    },
   
   
  },

  modules: {},
});
