<template>
  <div class="view-home">
    <h2 class="page-name">Home</h2>
    <HelloWorld msg="Click above to Signup or Signin"/>
  </div>
</template>

<style lang="scss" scoped></style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
