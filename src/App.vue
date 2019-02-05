<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/signup">Signup</router-link>&nbsp;|
      <router-link to="/signin">Signin</router-link>&nbsp;|
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  text-align: center;
}
</style>
