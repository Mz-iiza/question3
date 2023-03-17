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

        <li v-for="product in products" :key="product.id" class="product prd">
            <h2>{{ product.title }}</h2>
         
            <button  @click="$router.push(`/products/${product.id}`)"> Details</button>
         
        </li>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity"; // import ref from vue
import { onMounted } from "vue"; // import onMounted from vue
import { mapGetters } from "vuex";

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
                .then((response) => (products.value = response.products));
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
body {
    background-image: linear-gradient(-225deg,
            #a6abde 20%,
            #f8f6f1 45%,
            #a6abde 70%,
            #13194e 100%);

}

.product__card {
    width: 75%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 0 auto;
    color: #565a85;
}

.product {
    background: #13194e;
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;
    color:#565a85;
}

.product:hover {
    border-color: #13194e;
    background: transparent;
    backdrop-filter: blur(4.5px);
    cursor: pointer;
    color: #13194e;
}

.product__item-image {
    border-radius: 1.5rem;
    overflow: hidden;
    display: block;
    width: 100%;
    object-fit: cover;
}


/* ==========MEDIA QUERIES (MEDIUM DEVICES) ========== */
@media screen and (max-width: 1024px) {
    .product__card {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
        width: 86%;
    }

    .body {
        max-width: 1204px;
        overflow-x: hidden;
    }
}

/* ==========MEDIA QUERIES (SMALL DEVICES) ========== */
@media screen and (max-width: 600px) {
    .product__card {
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 90%;
    }

    .body {
        max-width: 600px;
        overflow-x: hidden;
    }
}
</style>