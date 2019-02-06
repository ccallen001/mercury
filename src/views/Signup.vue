<template>
  <div class="view-signup">
    <div class="container-signup">
      <h2>Signup</h2>
      <label>
        Email:
        <input type="email" v-model="signupEmail">
      </label>
      <label>
        Password:
        <input type="password" v-model="signupPassword">
      </label>
      <button @click="signup">Signup</button>
    </div>
  </div>
</template>

<style lang="scss"></style>


<script>
import Firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      signupEmail: "",
      signupPassword: ""
    };
  },
  methods: {
    signup() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.signupEmail, this.signupPassword)
        .then(resp => {
          alert(`User ${this.signupEmail} signed up successfully!`);
        });
    }
  }
};
</script>