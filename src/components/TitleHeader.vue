<template>
<div>
  <div class="p-grid thero__waves">
    <div class="p-col-6 p-md-6 p-lg-6 p-jc-center">
      <h2>App, Business & SaaS</h2>
      <h3>Landing Page Template</h3>
    </div>
    <div class="p-col-6 p-md-6 p-lg-6 p-jc-center">
      <img alt="Vue logo" src="../assets/undraw_investment_xv9d.svg" class="thero__image" />
    </div>
  </div>
</div>
</template>

<style lang="scss">
.thero {
  color: #ff00ff;

  &__disclaimer {
    color: #635963;
  }

  &__image {
    max-width: 50%;
    min-width: 400px;
    display: inline-block;
  }

  &__waves {
    background-image: url(../img/hero-area.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 650px;
    position: relative;
    overflow: hidden;
    padding: 200px 0 80px;
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
