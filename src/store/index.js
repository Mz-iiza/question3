import { createStore } from "vuex"; // Import the createStore function from Vuex

const TOKEN_KEY = "auth_token"; // Key to store the token in local storage

// Create a new store
const store = createStore({ // The store is a global object that contains the application state
  state: { // The state is the data that is shared across the application
    user: null,
    token: localStorage.getItem(TOKEN_KEY),
  },
  mutations: {     // Mutations are functions that change the state
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {  // The token is saved in the state and in local storage
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    clearAuth(state) {  // The token and user information are removed from the state and local storage
      state.user = null;
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
 // Actions are functions that call the API and commit mutations
  actions: {
    async loginUser({ commit }, credentials) { // The loginUser action calls the API to login the user and obtain a token
      const token = "false_token"; 

      commit("setToken", token); // The token is saved in the store and in local storage
      localStorage.setItem(TOKEN_KEY, token);

      const user = { userName: credentials.userName }; // Save user information if needed
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    async registerUser({ commit }, userData) { // The registerUser action calls the API to register the user and obtain a token
      const token = "false_token";

      commit("setToken", token); // The token is saved in the store and in local storage
      localStorage.setItem(TOKEN_KEY, token);

      const user = { firstName: userData.firstName, lastName: userData.lastName, userName: userData.userName }; // Save user information if needed
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    logout({ commit }) {
      // Clear the token and user information from the store and local storage
      commit("clearAuth");
    },
  },

  getters: {
    isAuthenticated: (state) => {
      return !!state.token;
    },
    getUser: (state) => {
      return state.user;
    },
    getToken: (state) => {
      return state.token;
    },
  },
});

export default store;
