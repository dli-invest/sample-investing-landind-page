<template>
  <div class="p-grid" :style="{ justifyContent: `center` }">
    <div class="p-col-8">
      <TabView>
        <TabPanel header="Datapane reports">
        Various datapane reports available at
          <a href="https://datapane.com/u/FriendlyUser/reports/daily-report/"
            >Daily Report
          </a>

          and

          <a href="https://datapane.com/u/FriendlyUser/reports/desired-tickers">
            Desired Tickers
          </a>
        </TabPanel>
        <TabPanel header="Knowledge From Projects">
                Great open source projects such as mplfinance, cheaply available
                courses on coursera have inspired me to open source my material. A lot
                of my thoughts are available at my executable book.

                Available at <a href="https://dli-invest.github.io/investing-book">Investing Book</a>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "primevue/card";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
@Options({
  components: {
    Card,
    TabView,
    TabPanel
  },
})
export default class SampleReports extends Vue {}
</script>