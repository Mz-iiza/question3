<template>
    <div class="prd">
    <h1>Product Details</h1>
    <h2>{{ product.title }}</h2>
    <h3>{{ product.description }}</h3>
    <p> ${{ product.price }}</p>
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
    color: #000;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

h2{
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

h3{
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

p{
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
}

div{
    text-align: center;
    margin: 1rem 0;
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
  background-color:#565a85;
  box-shadow: 0px 8px 20px rgb(1, 11, 63);
}

</style>