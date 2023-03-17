<template>
    <!--SIGN UP PAGE-->
    <div class="form">
    <h1>Finally you decided to join the Elite</h1>
    <h2>Sign Up</h2>

    <!--FORM-->
    <form @submit.prevent="submit">
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
  border: 1px solid #13194e;
  box-sizing: border-box;
}
button[type="submit"] {
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #13194e;
  color: #fff;
  cursor: pointer;
}
button[type="submit"]:hover {
    background-color:#565a85;
    box-shadow: 0px 8px 20px rgb(1, 11, 63);
}
</style> 
