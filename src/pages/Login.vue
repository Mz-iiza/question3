<template>
    <!--LOGIN PAGE-->
    <div class="login__container">
    <div class="form">
    <h1>Login Page</h1>
   <h2>Welcome back, savvy shopper. We've missed you!</h2> 
    <p>Log in to your account and unlock member-only benefits, including discounts and promotions</p>
    
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

      <h4 v-if="!isAuthenticated" class="signup__btn">
        Don't have an account? <br />
        <router-link to="/signup">Sign Up</router-link>
      </h4>

    </form>
  </div>
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
.login__container {
  margin: 3rem;
  padding: 1rem;
  background-color:  #f2f2f2;;
}
.signup__btn{
  margin-top: 1rem;
}
.login__container .form h1 {
  margin: 2rem;
} 
.login__container .form h2 {
  margin: 1rem;
} 

.login__container .form p {
  margin: 1rem;
} 
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
  border: 1px solid #66023c;
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
  background-color: #66023c;
  color: #fff;
  cursor: pointer;
}
button[type="button"]:hover {
    background-color:#d961a7;
    box-shadow: 0px 8px 20px #66023c;
}
</style>