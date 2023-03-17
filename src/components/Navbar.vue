
<template>
  <div class="navbar">
    <div class="store">
      <a href="#" class="logo">STORE</a>
    </div>
  
      <div class="nav-list">
         <router-link to="/">Home</router-link>
         <router-link to="/login" >Login</router-link>
         <router-link to="/signup" >Sign Up</router-link>
         <router-link to="/products">Products</router-link>
       </div>
    
    <div class="logout-btn">
      <button >Logout</button>
    </div>
  </div> 
    
    
  </template>

 
  
  <!--<script>
  import { computed } from "@vue/reactivity";
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
      };
      const isAuthenticated = computed(() => !!localStorage.getItem("token"));
      return {
        isAuthenticated,
        handleLogout,
      };
  },*/
  };
  </script> -->
  
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
 
  .logo{
    font-family: "Poppins", sans-serif cursive;
    font-size: 3rem;
    margin: 20px 0 15px -5px;
    min-width: 15vw;
    background-image: linear-gradient(
      -225deg,
      #f8f6f1 20%,
      #fff800 45%,
      #a6abde 70%,
      #13194e 100%
      
    );
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
    height: 35vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .navbar a {
    font-size: 2rem;
    font-weight: 700;
    color: #13194e;
    text-decoration: none;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .nav-list{
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
  .navbar a{
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

  .navbar-list li a{
    padding: 5px;
    font-size: 14px;
  }
  
}

</style>