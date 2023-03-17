<template>
    <!--LOGIN PAGE-->
    <div class="form">
    <h1>Login Page</h1>
    <h2>Login if you already have an account, if you don't, what you waiting for</h2>
    
    <form @handleLogin.prevent="handleLogin">

      <!--FORM-->
      <div class="form-group">   
        <input type="text" placeholder="Username" id="userName" v-model="userName" required/>
      </div>

      <div class="form-group">
       <br> 
        <input type="password" placeholder="Password" id="password" v-model="password" required />
      </div>

      <button type="button" @click="handleLogin" :disabled="!userName || !password">Login</button>
    </form>
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async handleLogin() {
      await this.loginUser({ userName: this.userName, password: this.password });
      this.$router.push("/products");
    },
  },
};
</script>



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