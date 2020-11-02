<template>
<Navbar />
<div>
    <router-view />
</div>
</template>

<style>
.center__wrapper {
    text-align: center;
    margin: auto
}

.services__image {
    max-width: 75%;
    min-width: 25%;
    display: inline-block;
    overflow: hidden;
    margin: auto;
}

.link-no-underline {
    text-decoration: none;
}
</style>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar
    }
}
</script>
