<template>
  <div class="signup">
    <div class="container-signup">
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

<style lang="scss">
label input {
  display: block;
}

button {
  display: block;
}
</style>


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
          alert(`User "${this.signupEmail}" signed up successfully!`);
        });
    }
  }
};
</script>