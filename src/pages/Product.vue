<template>
    <div class="prd product">
    <h2>Product Details</h2>
    <h3>{{ product.title }}</h3>
    <img class="img" :src="product.thumbnail" alt="" />
    <br>
    <h5>{{ product.description }}</h5>
    <br>
    <h3>Product price: ${{ product.price }}</h3>
    <h3>Discounted price: ${{ product.discountPercentage }}</h3>
    <br>
    <div>
        <button class="product-btn"> Add to Cart</button>
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


h1,
h2,
h3,
h4,
h5{
    color:#201f1fcf;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  background: #fff;
  padding: 0.1rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  width: 25%;
  height: 25;
}

p{
    color:#201f1fcf;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
}

div{
    text-align: center;
    margin: 1rem 0;
}

.product-btn {
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


</style>