<template>
  <div class="view-home">
    <h2 class="page-name">Home</h2>
    <HelloWorld :msg="currentUser ? 'You\'re Home now. Try going to the Dashboard.' : 'Click above to Signup or Signin'"/>
  </div>
</template>

<style lang="scss" scoped></style>


<script>
import Firebase from 'firebase';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      currentUser: Firebase.auth().currentUser
    }
  }
}
</script>
