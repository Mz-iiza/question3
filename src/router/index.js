import { createRouter, createWebHistory } from "vue-router"; // importing { createRouter, createWebHistory }  from "vue-router"//

//importing all the components from the pages and views folder. @ is an alias for src folder//

import Home from "@/views/Home.vue"; // importing Home from "../pages/Home.vue"//
import Product from "@/pages/Product.vue"; // importing Product from "../pages/Product.vue"//
import Products from "@/pages/Products.vue"; // importing products from "../pages/products.vue"//
import Login from "@/pages/Login.vue"; // importing login from "../pages/Login.vue"//
import Signup from "@/pages/Signup.vue"; // importing Signup from "../pages/Signup.vue"//
import store from "@/store/index.js"; // importing store from "../store/index.js"//
import Error404 from "@/pages/Error404.vue"; // importing Error404 from "../pages/Error404.vue"//

//creating a constant called routes and assigning it to an array of objects//

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Products",
    path: "/products",
    component: Products,
    meta: { requiresAuth: true },
  },
  {
    name: "Product",
    path: "/products/:productId",
    component: Product,
    props: true,
    },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    name: "signup",
    path: "/signup",
    component: Signup,
    meta: { requiresGuest: true },
  },
  {
    name: "Error404",
    path: "/:pathMatch(.*)*",
    component: Error404,
  },
];

//creating a constant called router and assigning it to a function called createRouter//

const router = createRouter({
  history: createWebHistory(), // creating a history//
  routes, // passing the routes constant//
});

//creating a function called canUserAccess//

router.beforeEach(async (to,from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresGuest && store.getters.isAuthenticated) {
    next("/products");
  } else {
    next();
  }
});


export default router;
