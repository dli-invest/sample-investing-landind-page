<template>
<TitleHeader />
<div class="custom-container">
    <Projects />
</div>
<div class="custom-container">
    <Services />
</div>
</template>

<style scoped>
.custom-container {
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Counter from "@/components/Counter.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import Services from "@/components/Services.vue";
import Projects from "@/components/Projects.vue"
@Options({
    components: {
        Navbar,
        Counter,
        TitleHeader,
        Services,
        Projects
    },
})
export default class Home extends Vue {}
</script>
