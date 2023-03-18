<template>
  <div class="navbar">
    <div class="store">
      <a href="#" class="logo">STORE</a>
    </div>

    <div class="nav-list">
      <h4><router-link to="/">Home</router-link></h4>
      <h4 v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
      </h4>
      <h4 v-if="!isAuthenticated">
        <router-link to="/signup">Sign Up</router-link>
      </h4>
      <h4><router-link to="/products">Products</router-link></h4>
    </div>

    <div class="logout-btn">
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.logo {
  font-family: "Poppins", sans-serif cursive;
  font-size: 3rem;
  margin: 20px 0 15px -5px;
  min-width: 15vw;
  background-image: linear-gradient(-225deg,
      #f8f6f1 20%,
      #000 45%,
      #201f1fcf 70%,
      #fff 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

.navbar {
  margin: 0px;
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.router-link {
  color: #201f1fcf ;
  font-size: 2rem;
}

.navbar a {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.nav-list {
  font-size: 2rem;
}

.nav-list :hover {
  color: #555;
}

.nav-list {
  font-size: 2rem;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2rem;
  color: #13194e;
}

@media screen and (max-width: 600px) {
  .navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }

  .nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 25px;
  }

  .navbar-list {
    flex-direction: column;
  }

  .navbar-list li {
    display: block;
    margin: 10px 0;
  }

  .navbar-list li a {
    padding: 5px;
    font-size: 14px;
  }
}</style>