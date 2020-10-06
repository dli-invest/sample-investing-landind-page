<template>
<Navbar />
<div class="about">
  <h1>This is an about page</h1>
</div>
</template>

<script lang="ts">
import {
  Options,
  Vue
} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
@Options({
  components: {
    HelloWorld,
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
