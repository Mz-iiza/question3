<template>
    <!--SIGN UP PAGE-->
    <div class="signup__container">
    <div class="form">
    <h1>Sign Up</h1>
    <h2> Enjoy personalized shopping experiences !</h2>
    <p>We're thrilled you're here. Sign up and enjoy the perks of being a part of our online community</p>

    <!--FORM-->
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="name" v-model="firstName" required>
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="name" v-model="lastName" required>
      </div>

      <div class="form-group">
        <label for="userName">UserName</label>
        <input type="text" id="name" v-model="userName" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>

      <div class="form-group">
        <label for="confirm-password">Password</label>
        <input type="confirm-password" id="password" v-model="password" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>

</template>

<script>
import { mapActions } from "vuex"; // import mapActions from vuex
export default { 
  data() {   // data() is a function that returns an object
    return {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {  // methods is an object that contains functions
    ...mapActions(["registerUser"]),
    async signup() {
      await this.registerUser({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        password: this.password,
      });
      this.$router.push("/products"); // redirect to products page
    },
  },
  
  computed: {  // computed is an object that contains functions
    isValid() {
      return this.password === this.confirmPassword;  // return true if password and confirmPassword are equal
    },
  },
  
};

</script>



<style scoped>
.signup__container {
  margin: 3rem;
  padding: 1rem;
  background-color: #fff;
}

.signup__container .form h1 {
  margin: 2rem;
} 
.signup__container .form h2 {
  margin: 1rem;
} 

.signup__container .form p {
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
input[type="email"],
input[type="password"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #66023c;
  box-sizing: border-box;
}
button[type="submit"] {
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #66023c;
  color: #fff;
  cursor: pointer;
}
button[type="submit"]:hover {
    background-color:#d961a7;
    box-shadow: 0px 8px 20px #66023c;
}
</style> 
