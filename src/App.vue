<template>
   <div>
    <Navbar/>
   </div>
   <router-view/> 
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  watch: {
    isLoggedIn(newValue) {
      if (!newValue) {
        this.$router.push({ name: "Login" });
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #201f1fcf;
  margin-top: 0px;
}
</style>
