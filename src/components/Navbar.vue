<template>
  <div class="navbar">
    <div class="logo">
      <h1>STORE</h1>
    </div>

    <div class="nav__list">
      <h4><router-link to="/" class="links">Home</router-link></h4>
      <h4 v-if="!isAuthenticated">
        <router-link to="/login" class="links">Login</router-link>
      </h4>
      
      <h4><router-link to="/products" class="links">Products</router-link></h4>
    </div>


    <div class="logout-btn">
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </div>

    <div class="hamburger__container">
      <Hamburger />
    </div>

   
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Hamburger from "@/components/Hamburger.vue";

export default {
  name: "Navbar",
  components: {
    Hamburger,
  },
 
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style >

.navbar {
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.logo h1 {
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
.nav__list  {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
}



.hamburger__container {
  margin-right: 4rem;
}

.nav__list .links{
  margin: 0 1rem;
}

.router-link {
  color: #201f1fcf ;
  font-size: 2rem;
}

.navbar a {
  font-size: 1rem;
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

@media screen and (max-width: 768px) {

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

  .nav__list {
    display: none;
  }

  .logout-btn button {
   background: #000 !important;
    color: #fff !important;
    border: none !important;
    padding: 0.5rem 1rem !important;
    border-radius: 5px !important;
    font-size: 0.8rem !important;
    font-weight: 700 !important;
  }
}</style>