<template>
<TitleHeader />
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Counter from "@/components/Counter.vue";
import TitleHeader from "@/components/TitleHeader.vue"
@Options({
    components: {
        Navbar,
        Counter,
        TitleHeader
    },
})
export default class Home extends Vue {}
</script>
