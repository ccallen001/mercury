<template>
  <div class="view-dashboard">
    <h2>Dashboard</h2>
    <p class="msg-welcome">Welcome to Mercury, {{ currentUser }}!</p>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "dashboard",
  beforeMount() {
    this.currentUser = Firebase.auth().currentUser.email;
  },
  data() {
    return {
      currentUser: ""
    };
  }
};
</script>
