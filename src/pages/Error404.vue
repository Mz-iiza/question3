<template>
    <div class="container__error">
        <h1>Oops! 404 | Page Not Found</h1>
        <p>Looks like you've stumbled upon a missing page. Don't worry, we'll get you back on track!</p>
        <button class="btn__back" @click="goBack">Go Back</button>
    </div>
</template>

<script>
export default {
    name: "Error404",
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.container__error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f2f2f2;
    font-family: "Poppins", sans-serif;
    text-align: center;
}

.container__error h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
}

.container__error p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #666;
}

.btn__back {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn__back:hover {
    background-color: #666;
}

@media screen and (max-width: 1024px) {
    .container__error h1 {
        font-size: 3rem;
    }

    .container__error p {
        font-size: 1.25rem;
    }

    .btn__back {
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
    }
}

@media screen and (max-width: 600px) {
    .container__error h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .container__error p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .btn__back {
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
}
</style>