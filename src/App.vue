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
    margin: 0;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0;
    color: whitesmoke;
    font-size: 64px;
    text-shadow: 0 1px 2px #111, 0 1px 16px #333;
  }

  #nav {
    display: block;
    margin: auto;
    margin-bottom: 12px;
    padding: 16px 0;
    width: 95vw;
    background: linear-gradient(to bottom right, rgba(100, 55, 41, 0.5),  rgba(39, 58, 93, 0.5));;
    color: whitesmoke;
    border-radius: 4px;

    .nav {
      display: flex;
      justify-content: center;

      & > * {
        // flex: 1;
        margin: 0 16px;
        &:first-child { margin-left: 0; }
        &:last-child { margin-right: 0; }
        width: 100px;
        color: whitesmoke;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          color: #111;
          cursor: pointer;
        }
      }

      .signout {
        &:hover {
          color: #111;
          cursor: pointer;
        }
      }
    }
  }

  .page-name {
    margin: 0;
    margin-bottom: 10px;
    color: whitesmoke;
    text-shadow: 0 1px 4px #111;
  }

  .container { 
    &-signup,
    &-signin {
      padding: 0 32px 24px;
      width: 300px;
      background-color: whitesmoke;
      border-radius: 4px;
      box-shadow: 0 1px 8px #333;

      label {
        display: block;
        margin-bottom: 8px;
        text-align: left;

        &:last-of-type {
          margin-bottom: 32px;
        }

        input {
          display: block;
          margin-top: 4px;
          width: 100%;
        }
      }
    }
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

