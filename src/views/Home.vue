<template>
<TitleHeader />
<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Counter from "@/components/Counter.vue";
import TitleHeader from "@/components/TitleHeader.vue"
@Options({
    components: {
        HelloWorld,
        Navbar,
        Counter,
        TitleHeader
    },
})
export default class Home extends Vue {}
</script>
