<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="This is an table app"/>
    <vue-button>Hello</vue-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from '@components';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'vue-button': Button,
  },
};
</script>
