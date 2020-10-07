<template>
<div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-6">
        <h2>App, Business & SaaS</h2>
        <h3>
            Landing Page Template
        </h3>
    </div>
    <div class="p-col-12 p-md-6 p-lg-6">
        <img alt="Vue logo" src="../assets/undraw_investment_xv9d.svg" class="thero__image" />
    </div>
</div>
<div class="p-grid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,106.7C840,107,960,149,1080,138.7C1200,128,1320,64,1380,32L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
</div>
</template>

<style lang="scss">
.thero {
    color: #FF00FF;

    &__disclaimer {
        color: #635963
    }

    &__image {
        max-width: 50%;
        min-width: 400px;
    }
}
</style>

<script lang="ts">
import Card from "primevue/card"
export default {
    components: {
        Card
    }
}
</script>
