<template>
  <div id="app">
    <h1 id="title">Mercury</h1>
    <div id="nav">
      <div class="nav-left"></div>
      <div class="nav-middle">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/signup" v-if="!currentUser">Signup</router-link>
        <router-link to="/signin" v-if="!currentUser">Signin</router-link>
      </div>
      <div class="nav-right">
        <span class="signout" v-if="currentUser" @click="signout">(X)</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// helpers
[class*="container-"] {
  display: inline-block;
  padding: 8px 32px 32px;
  box-shadow: 0 2px 16px #ddd;
  border-radius: 4px;

  label {
    display: block;
    margin-bottom: 8px;
    text-align: left;
  }

  label:last-of-type {
    margin-bottom: 32px;
  }

  label input {
    display: block;
  }

  button {
    display: block;
    margin: auto;
  }
}
//

#app {
  text-align: center;
}

#title {
  font-size: 40px;
  margin-bottom: 64px;
}

#nav {
  display: flex;
  margin-bottom: 64px;

  .nav-left {
    flex: 1;
  }

  .nav-middle {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .nav-right {
    flex: 1;
    text-align: right;

    .signout {
      margin-right: 32px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

<script>
import Firebase from "firebase";

export default {
  name: "app",
  computed: {
    currentUser() {
      return Firebase.auth().currentUser;
    }
  },
  methods: {
    signout() {
      Firebase.auth()
        .signOut()
        .then(() => this.$router.push("/"));
    }
  }
};
</script>

