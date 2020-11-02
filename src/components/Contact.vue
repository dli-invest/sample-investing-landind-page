<template>
<div class="custom-container p-jc-center">
    <div class="p-fluid p-formgrid p-grid p-jc-center">
        <form action="https://formspree.io/davidli012345@gmail.com" method="POST">
            <div field="p-field p-col">
                <h4>Contact Us</h4>
            </div>
            <div class="p-field p-col">
                <label for="Subject">Subject</label>
                <InputText id="Subject" type="text" />
            </div>
            <div class="p-field p-col">
                <label for="From">From</label>
                <InputText id="From" type="text" />
            </div>
            <div>
                <Button>
                    Send message
                </Button>
            </div>
        </form>
    </div>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
@Options({
    components: {
        Button,
        InputText
    },
})
export default class Projects extends Vue {}
</script>
