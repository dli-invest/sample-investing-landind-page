<template>
<Menubar :model="items">
    <template #start>
        <img alt="logo" src="../assets/logo.png" height="40" class="p-mr-2" />
    </template>
    <template #end>
        <font-awesome-icon :icon="['fab', 'github']" /> <a href="https://github.com/dli-invest/dli-invest.github.io" class="link-no-underline"> Github </a>
    </template>
</Menubar>
</template>

<script lang="ts">
// add padding to menubar
import {
    Options
} from "vue-class-component";
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
export default {
    components: {
        Menubar,
        InputText,
        Button

    },
    data() {
        return {
            items: [{
                label: "Home",
                icon: "pi pi-fw pi-home",
                to: '/'
            }]
        };
    }
}
</script>
