<template>
    <div class="container__error">
        <h1>404 | Error Page Not Found</h1>
        <br>
        <p> You have reached the end of the internet. Unfortunately, the page you were looking for didn't make it this far</p>
        <h2>Let's get you back on track!</h2>
        <br>
    
    </div>
</template>

<script>
export default {
    name: "Error404",
};
</script>

<style scoped>

.container__error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
}
</style>
