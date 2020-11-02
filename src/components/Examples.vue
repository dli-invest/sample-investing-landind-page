<template>
  <div class="p-grid">
    <div class="p-col-12 p-jc-center">
      <Card>
        <template slot="title"> Datapane reports </template>
        <template slot="content">
          Various datapane reports available at
          <a href="https://datapane.com/u/FriendlyUser/reports/daily-report/"
            >Daily Report
          </a>

          and

          <a href="https://datapane.com/u/FriendlyUser/reports/desired-tickers">
            Desired Tickers
          </a>
        </template>
      </Card>
      <Card>
        <template slot="title"> Knowledge Transfer </template>
        <template slot="content">
          Great open source projects such as mplfinance, cheaply available
          courses on coursera have inspired me to open source my material. A lot
          of my thoughts are available at my executable book
          <a href="https://dli-invest.github.io/investing-book/">
            Investing Book
          </a>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Fieldset from "primevue/fieldset";
import ServiceCard from "@/components/ServiceCard.vue"; // @ is an alias to /src
@Options({
  components: {
    ServiceCard,
    Fieldset,
  },
})
export default class Projects extends Vue {}
</script>