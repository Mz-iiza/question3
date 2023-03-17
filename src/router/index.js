import { createRouter, createWebHistory } from "vue-router"; // importing { createRouter, createWebHistory }  from "vue-router"//

//importing all the components from the pages and views folder. @ is an alias for src folder//

import Home from "@/views/Home.vue"; // importing Home from "../pages/Home.vue"//
import Product from "@/pages/Product.vue"; // importing Product from "../pages/Product.vue"//
import Products from "@/pages/Products.vue"; // importing products from "../pages/products.vue"//
import Login from "@/pages/Login.vue"; // importing login from "../pages/Login.vue"//
import Signup from "@/pages/Signup.vue"; // importing Signup from "../pages/Signup.vue"//

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
  },
  {
    name: "signup",
    path: "/signup",
    component: Signup,
  },
];

//creating a constant called router and assigning it to a function called createRouter//

const router = createRouter({
  history: createWebHistory(), // creating a history//
  routes, // passing the routes constant//
});

/*const isAuthenticated = false; // creating a constant called isAuthenticated and assigning it to false//

const canUserAccess = (to) => {
   if (!isAuthentificated && to.name !== "Login"){
    return false;
   } 

   return true;
}

router.beforeEach(async (to, from) => {
   const canAccess = await canUserAccess(to)

  if (!canAccess) {
    return{
      name: "Login"
    };
  }
});*/



export default router;
