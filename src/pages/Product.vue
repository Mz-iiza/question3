<template>
    <div class="prd product">
    <h2>Product Details</h2>
    <h1>{{ product.title }}</h1>
    <h3>{{ product.description }}</h3>
    <h2> ${{ product.price }}</h2>
    <br>
    <div>
        <button class="button"> Add to Cart</button>
  </div>
</div>
</template>

<script>

//
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

// exporting the product
export default {
      name: "Product",
    // seting up the product details

    setup() {
        const product = ref({});

        // const 
        const route = useRoute();

        const fetchProduct = () => {
            const { productId } = route.params;
            const endpoint = `https://dummyjson.com/products/${productId}`;

            fetch(endpoint)
                .then((response) => response.json())
                .then((json) => (product.value = json));
        };

        // onMounted(fetchProduct);
        onMounted(() => {
            fetchProduct();
        });

        return {
            product,
        };
    },
};

</script>

<style>

h1{
    color: #565a85;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

h2{
    color: #565a85;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

h3{
    color:#565a85;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

p{
    color:#565a85;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

div{
    text-align: center;
    margin: 1rem 0;
}

.prd {
    width: 75%;
    width: 90%;
    padding: 1.2rem;
    display: grid;
    border: 1px solid #13194e;
    border-radius: 2rem;
    background: transparent;
    backdrop-filter: blur(4.5px);
    cursor: pointer;
    color: #13194e;
    margin: 0 auto;
    transition: all 400ms ease;
}

button {
  background-color: #13194e;
  color: #fff;
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
  color: #13194e;
  background-color:#565a85;
  box-shadow: 0px 8px 20px rgb(1, 11, 63);
}

</style>