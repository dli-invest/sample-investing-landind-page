<template>
<div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-6 p-jc-center">
        <div>
            <img src="../assets/undraw_Artificial_intelligence_re_enpp.svg" class="services__image" />
            <h4>Leveraging AI to drive data based decisions.</h4>
        </div>
    </div>
    <div class="p-col-12 p-md-6 p-lg-6 services__wrapper">
        <h2>Sample Projects</h2>
        <Fieldset legend="Dash Analytics" :toggleable="true">
            Easily Tracking movements in my stocks via a dashboard and various details with an api.
        </Fieldset>
        <Fieldset legend="News Notifications" :toggleable="true">
            News notifications directly sent to discord channels using discord webhooks and cron jobs via github actions.
        </Fieldset>

    </div>
</div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Fieldset from 'primevue/fieldset';
import ServiceCard from "@/components/ServiceCard.vue"; // @ is an alias to /src
@Options({
    components: {
        ServiceCard,
        Fieldset
    },
})
export default class Projects extends Vue {}
</script>
