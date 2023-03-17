<template>
    
    <div class="signup-form">
    <h1>Finally you decided to join the Elite</h1>
    <h2>Sign Up</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="name" v-model="firstName" required>
      </div>

      <div class="form-group">
        <label for="laststName">Last Name</label>
        <input type="text" id="name" v-model="lastName" required>
      </div>

      <div class="form-group">
        <label for="laststName">Userame</label>
        <input type="text" id="name" v-model="lastName" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>

</template>

<!--<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const dummyData = {
      firstName: "uju",
      lastName: "oyiza",
      userName: "jujudev",
      password: "password",
    };

    const submit = () => {
      if (
        firstName.value === dummyData.firstName &&
        lastName.value === dummyData.lastName &&
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
      firstName,
      lastName,
      userName,
      password,
      submit,
    };
  },
};
</script>-->


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
  width: 100%;
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
