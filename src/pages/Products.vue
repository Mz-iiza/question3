<!-- PRODUCT PAGE -->
<template>
    <h1>Products</h1>
    <p class="subtitle">Discover what makes our products stand out from the rest!</p>
    <h2> Welcome to our product page</h2>
    <div class="form">
        <div class="form-group">
            <input type="text" placeholder="Search" />
        </div>
        <div class="products__btn">
            <button>Search</button>
            <button @click="clearSearch">Clear</button>
        </div>
        <br />
    </div>
    <div class="product__card">
        <li v-for="product in products" :key="product.id" class="product prd">
            <img :src="product.thumbnail" alt="" />
            <h2>{{ product.title }}</h2>
              <br/>
            <button @click="$router.push(`/products/${product.id}`)">Details</button>
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
    computed: {
        ...mapGetters(["isAuthenticated"]),
    },
    mounted() {
        if (!this.isAuthenticated) {
            this.$router.push({ name: "Login" });
        }
    },

    setup() {
        const products = ref([]);

        const fetchProducts = () => {
            const endpoint = "https://dummyjson.com/products/";

            fetch(endpoint)
                .then((response) => response.json())
                .then((response) => (products.value = response.products));
        };

        const clearSearch = () => {
      fetchProducts();
    };

        onMounted(() => {
            fetchProducts();
        });

        // returning the products
        return {
            products,
            clearSearch,
        };
    },
};
</script>
  
<style>
body {
    background:#fff;
}

.product__card {
    width: 75%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
}

.product__card {
    width: 75%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin: 0 auto;
    color: #201f1fcf;
}

.product {
    background: #fff;
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;
    color: #201f1fcf;
    box-shadow: 0px 8px 20px rgba(0, 0, 0,1);
}
h1,
h2,
h3,
h4,
h5,
p{
    color:#201f1fcf;
}

.product__item-image {
    border-radius: 0.5rem;
    overflow: hidden;
    display: block;
    width: 50px;
    height: 50px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0,1);
    object-fit: cover;
}

.products__btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

button {
  background-color: #66023c;
  color: #d961a7;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0px 4px 10px  rgba(0,0,0,0.5);
  transition: all 0.3s ease;
  cursor: pointer;
}

button:hover {
  color: #66023c;
  background-color: #d961a7;
  box-shadow: 0px 8px 20px rgba(0, 0, 0,1);
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