<template>
    
    <div class="form">
    <h1>Login if you already have an account, if you don't what you waiting for</h1>
    <h2>Login Page</h2>
    <form @handleLogin.prevent="handleLogin">

      <div class="form-group">
        <label for="userName">Username</label>
        <input type="text" placeholder="Username" id="userName" v-model="userName" required/>
      </div>

      <div class="form-group">
        
        <input type="password" placeholder="Password" id="password" v-model="password" required />
      </div>
      <br/>
      <button type="button" @click="handleLogin" :disabled="!userName || !password">Login</button>
    </form>
  </div>

</template>

<!--<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const dummyData = {
      userName: "jujudev",
      password: "password",
    };

    const handleLogin = () => {
      if (
        userName.value === dummyData.userName &&
        password.value === dummyData.password
      ) {
        localStorage.setItem("token", "cacacacacac");
        alert("Login successful!!!");
        router.push({ name: "Products" });
      } else {
        alert("Username or Password is incorrect!!!");
      }
    };

    return {
      userName,
      password,
      handleLogin,
    };
  },
};
</script>-->



<style >
.form {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  text-align: left;
}
input[type="text"],
input[type="username"],
input[type="password"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #13194e;
  box-sizing: border-box;
}
button[type="button"] {
  display: block;
  width: 25%;
  position: center;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #13194e;
  color: #fff;
  cursor: pointer;
}
button[type="button"]:hover {
    background-color:#565a85;
    box-shadow: 0px 8px 20px rgb(1, 11, 63);
}
</style>