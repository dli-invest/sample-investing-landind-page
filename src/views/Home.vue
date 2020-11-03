<template>
  <TitleHeader />
  <div class="custom-container">
    <Projects />
  </div>
  <div class="custom-container">
    <Services />
  </div>
  <div class="custom-container">
    <SampleReports />
  </div>
  <div class="custom-container">
    <Contact />
  </div>
</template>

<style scoped>
.custom-container {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import Services from "@/components/Services.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import SampleReports from "@/components/SampleReports.vue";
@Options({
  components: {
    Navbar,
    Contact,
    TitleHeader,
    Services,
    Projects,
    SampleReports,
  },
})
export default class Home extends Vue {}
</script>
