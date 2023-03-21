<template>
    <div class="hamburger-menu" v-if="isMobile">
      <div class="hamburger" :class="{ open: isOpen }" @click="isOpen = !isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu" :class="{ open: isOpen }">
        <ul>
            <li><router-link to="/" class="links">Home</router-link></li>
            <li v-if="!isAuthenticated">
            <router-link to="/login" class="links">Login</router-link>
            </li>
      
            <li><router-link to="/products" class="links">Products</router-link></li> 
        </ul>
      </div>
    </div>
  </template>
  
<script>
  import { ref, computed } from 'vue'
  
  export default {
    setup() {
      const isOpen = ref(false)
      const screenWidth = ref(window.innerWidth)
      window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth
      })
  
      const isMobile = computed(() => screenWidth.value <= 768)
  
      return {
        isOpen,
        isMobile,
      }
    },
  }
</script>
  
  <style scoped>
  .hamburger-menu {
    position: absolute;
    top: 2.2rem;
    z-index: 1;
  }
  
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
  
  .hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
  }
  
  .hamburger span:nth-child(1) {
    transform-origin: top;
    transform: rotate(0deg);
  }
  
  .hamburger span:nth-child(2) {
    opacity: 1;
    transform-origin: center;
    transform: rotate(0deg);
  }
  
  .hamburger span:nth-child(3) {
    transform-origin: bottom;
    transform: rotate(0deg);
  }
  
  .hamburger.open span:nth-child(1) {
    transform-origin: top;
    transform: rotate(45deg);
  }
  
  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform-origin: center;
    transform: rotate(0deg);
  }
  
  .hamburger.open span:nth-child(3) {
    transform-origin: bottom;
    transform: rotate(-45deg);
  }
  
  .menu {
   
    position: relative;
    top: 40px;
    left: -1rem;
    right: 0;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    background: #c5c3c3;
    width: 600%;
    height: 600vh;
    
  }
  
  .menu.open {
    opacity: 1;
    visibility: visible;
    z-index: 0;
    width: 100%;
  }
  
  .menu ul {
    list-style: none;
    margin: 0;
    padding: 0 1rem;
  }
  
  .menu ul li {
    margin: 10px 0;
  }
  
  .menu ul li a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  
  @media screen and (min-width: 768px) {
    .hamburger-menu {
      display: none;
    }
  }
  </style>