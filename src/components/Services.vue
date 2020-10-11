<template>
<div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-6 p-jc-center">
        <div class="p-d-flex p-jc-around">
            <div class="p-d-flex p-flex-column">
                <ServiceCard title="Building Wealth" description=" Wealth Management Services " icon='hand-holding-usd' />
                <ServiceCard title="Analytics" description="Providing key analytics." cardClass="bg-red" icon='chart-line' />
            </div>
            <div class="p-d-flex p-flex-column">
                <ServiceCard title="Forward Looking" description="   Low cost fees.  " cardClass="bg-orange margin-t4" icon='piggy-bank' />
                <ServiceCard title="Hitting the mark" description="Aiming to Exceed expectations" cardClass="bg-green" icon='bullseye' />
            </div>
        </div>
    </div>
    <div class="p-col-12 p-md-6 p-lg-6 services__wrapper">
        <div>
            <img src="../assets/undraw_Artificial_intelligence_re_enpp.svg" class="services__image" />
            <h4>Leveraging AI to drive data based decisions.</h4>
        </div>

    </div>
</div>
</template>

<style lang="scss">
.services {
    &__image {
        max-width: 75%;
        min-width: 25%;
        display: inline-block;
        overflow: hidden;
        margin: auto;
    }

    &__wrapper {
        text-align: center;
        margin: auto
    }
}
</style>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import ServiceCard from "@/components/ServiceCard.vue"; // @ is an alias to /src
@Options({
    components: {
        ServiceCard
    },
})
export default class Services extends Vue {}
</script>
