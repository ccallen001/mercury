<template>
  <div class="view-signin">
    <div class="container-signin">
      <h2>Signin</h2>
      <label>
        Email:
        <input type="email" v-model="signinEmail" @keyup.enter="signin">
      </label>
      <label>
        Password:
        <input type="password" v-model="signinPassword" @keyup.enter="signin">
      </label>
      <button @click="signin">Signin</button>
    </div>
  </div>
</template>

<style lang="scss">
.view-signin {
  
}
</style>


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
    resetFields() {
      [this.signinEmail, this.signPassword].forEach(fieldValue => fieldValue = '');
    },
    signin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.signinEmail, this.signinPassword)
        .then(resp => {
          alert(`User ${this.signinEmail} is now signed in!`);
          this.$parent.$emit('signed-in');
          this.$router.push("/dashboard");
        })
        .catch(err => {
          alert(err.code === 'auth/user-not-found' ? 'User not found.' : 'Oops! Something went wrong.');
          this.resetFields();
        });
    }
  }
};
</script>