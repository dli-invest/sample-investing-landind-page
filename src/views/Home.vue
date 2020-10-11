<template>
<TitleHeader />
<Services />
</template>

<script lang="ts">
import {
  Options,
  Vue
} from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Counter from "@/components/Counter.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import Services from "@/components/Services.vue";
@Options({
  components: {
    Navbar,
    Counter,
    TitleHeader,
    Services,
  },
})
export default class Home extends Vue {}
</script>
