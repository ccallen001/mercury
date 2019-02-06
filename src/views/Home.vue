<template>
  <div class="view-home">
    <h2>Home</h2>
    <HelloWorld msg="hello world component"/>
  </div>
</template>

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
