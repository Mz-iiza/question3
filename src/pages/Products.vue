<template>
    <h1>Products</h1>
    <p class="subtitle">Welcome to our online store!</p>
    <div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
        <button>Clear</button>
    </div>
       <div class="product__card">
          <!--<div product__item-image>
                 <img :src={{image}} alt={{title}} />
               </div>-->
           
            <li v-for="product in products" :key="product.id" class="product">
              <h2>{{ product.title }}</h2>
            
                <button @click="$router.push(`/products/${product.id}`)">Product Details</button>
            
            </li>
        </div> 
   
</template>

<script>
import { ref } from "@vue/reactivity"; // import ref from vue
import { onMounted } from "vue"; // import onMounted from vue

// exporting the products
export default {
    name: "Products",
// setting up the products
setup() {
    const products = ref([]); 

    const fetchProducts = () => {      
        const endpoint = "https://dummyjson.com/products/";

        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => (products.value = response.products ));
        };
     // onMounted(fetchproducts);
     onMounted(() => {
        fetchProducts();
     })  
        
// returning the products
    return {
        products,
    };
},
};

</script>

<style>
body{
    background-image: linear-gradient(
    -225deg,
    #a6abde 20%,
    #f8f6f1 45%,
    #a6abde 70%,
    #13194e 100%
  );
  
}
/*.product__card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    background: #34364e;;
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;
    width: 75%;
  width: var(--container-width-lg);
  margin: 0 auto;
}*/
.container {
  width: 75%;
  margin: 0 auto;

}
.product__container {
    width: 40%;
    padding-bottom: 4rem;
}

.product {
    background: #34364e;
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
    margin: 1.2rem;
}

.product:hover {
    border-color: #13194e;
    background: transparent;
    backdrop-filter: blur(4.5px);
    cursor:default;
}
.product__item-image {
    border-radius: 1.5rem;
    overflow: hidden;
}

.product h3 {
   margin: 1.2rem 0 2rem;
}



/* ==========MEDIA QUERIES (MEDIUM DEVICES) ========== */
@media screen and (max-width: 1024px){
    .product__container {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
    }
 }
     
 /* ==========MEDIA QUERIES (SMALL DEVICES) ========== */
 @media screen and (max-width: 600px) {
    .product__container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
 }
</style>