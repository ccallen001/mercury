<template>
  <div id="app">
    <h1 id="title">Mercury</h1>
    <div id="nav">
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/signup" v-if="!currentUser">Signup</router-link>
        <router-link to="/signin" v-if="!currentUser">Signin</router-link>
        <span class="signout" v-if="currentUser" @click="signout">Signout (X)</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// helpers
[class*="container-"] {
  display: inline-block;
}
//

#app {
  #title {
    font-size: 64px;
    color: whitesmoke;
    text-shadow: 0 1px 2px #111, 0 1px 16px #333;
    margin-bottom: 60px;
  }

  #nav {
    display: block;
    margin: auto;
    margin-bottom: 64px;
    padding: 16px;
    width: 80vw;
    background-color: whitesmoke;
    border-radius: 4px;

    .nav {
      display: flex;
      justify-content: space-between;

      & > * {
        flex: 1;
      }

      .signout {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .page-name {
    color: whitesmoke;
    text-shadow: 0 1px 4px #111;
  }
}
</style>

<script>
import Firebase from "firebase";

export default {
  name: "app",
  beforeMount() {
    this.$on('signed-in', () => {
      this.currentUser = Firebase.auth().currentUser;
    });
  },
  data() {
    return {
      currentUser: Firebase.auth().currentUser
    };
  },
  methods: {
    signout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.currentUser = null;
          this.$router.push("/");
        });
    }
  }
};
</script>

