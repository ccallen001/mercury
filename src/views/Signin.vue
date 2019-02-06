<template>
  <div class="view-signin">
    <div class="container-signin">
      <h2>Signin</h2>
      <label>
        Email:
        <input type="email" v-model="signinEmail">
      </label>
      <label>
        Password:
        <input type="password" v-model="signinPassword">
      </label>
      <button @click="signin">Signin</button>
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
      signinEmail: "",
      signinPassword: ""
    };
  },
  methods: {
    signin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.signinEmail, this.signinPassword)
        .then(resp => {
          alert(`User ${this.signinEmail} is now signed in!`);

          this.$router.push("/dashboard");
        });
    }
  }
};
</script>