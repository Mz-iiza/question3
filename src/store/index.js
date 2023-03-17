import { createstore } from'vuex';

 
const store = createstore({
      
    state() {},
        
    getters: {
        products: (state) => state.products,
    },
    mutations: {
        addProduct: (state, product) => state.products.push(product),
    },
    actions: {
        addProduct: ({ commit }, product) => commit("addProduct", product),
    },
});

export default store;