<template>
<div class="home">
  <Navbar />
  <Counter />
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Counter from "@/components/Counter.vue";
@Options({
  components: {
    HelloWorld,
    Navbar,
    Counter,
  },
})
export default class Home extends Vue {}
</script>
