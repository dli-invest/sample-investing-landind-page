<template>
<div class="thero__waves">
    <div class="p-grid">
        <div class="p-col-12 p-md-6 p-lg-6 p-jc-center">
            <div class='thero__header'>
                <h2>Gfleet Consulting</h2>
                <h3>Quantative Finance Services</h3>
            </div>
            <div class='thero__disclaimer'>
                We offer support for custom web scrapping, plotting and financial dashboards.
            </div>
        </div>
        <div class="p-col-12 p-md-6 p-lg-6">
            <div class='thero__image-wrapper'>
                <img alt="Vue logo" src="../assets/undraw_investment_xv9d.svg" class="thero__image" />
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.thero {
    color: #ff00ff;

    &__disclaimer {
        color: #635963;
        text-align: center;
    }

    &__header {
        text-align: center;
    }

    &__image {
        max-width: 50%;
        min-width: 25%;
        display: inline-block;
        overflow: hidden;

        &-wrapper {
            display: flex;
            justify-content: center;
        }
    }

    &__waves {
        background-image: url(../assets/waves.svg);
        background-position: bottom center;
        background-repeat: no-repeat;
        overflow: hidden;
        padding: 25px 0 80px;
    }
}
</style>

<script lang="ts">
import Card from "primevue/card";
export default {
    components: {
        Card,
    },
};
</script>
