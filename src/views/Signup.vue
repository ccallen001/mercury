<template>
  <div class="view-signup">
    <div class="container-signup">
      <h2>Signup</h2>
      <label>
        Email:
        <input type="email" v-model="signupEmail" @keyup.enter="signup">
      </label>
      <label>
        Password:
        <input type="password" v-model="signupPassword" @keyup.enter="signup">
      </label>
      <button @click="signup">Signup</button>
    </div>
  </div>
</template>

<style lang="scss">
.view-signup {

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
      Firebase.database()
        .ref("users")
        .push({ user: this.signupEmail, messages: [] })
        .then(() => {
          Firebase.auth()
            .createUserWithEmailAndPassword(
              this.signupEmail,
              this.signupPassword
            )
            .then(resp => {
              alert(`User ${this.signupEmail} signed up successfully!`);
              this.$router.push("/dashboard");
            })
            .catch(err => alert(`Oops! ${err.message}`));
        })
        .catch(err =>
          alert("There was an error writing the user to the database.")
        );
    }
  }
};
</script>