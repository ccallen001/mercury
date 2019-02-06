<template>
  <div id="app">
    <h1 id="title">Mercury</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/dashboard">Dashboard</router-link>&nbsp;|
      <router-link to="/signup">Signup</router-link>&nbsp;|
      <router-link to="/signin">Signin</router-link>
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
    text-align: left
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
}

#nav {
  margin-bottom: 32px;
}
</style>
