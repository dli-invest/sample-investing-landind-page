<template>
<div :class="['custom-card', cardClass]">
    <div class='card-header'>
        <div class='card-title'>
            <font-awesome-icon :icon=icon size="lg"></font-awesome-icon>
            <h4>{{title}}</h4>
        </div>
    </div>
    <div class='card-description'>
        {{description}}
    </div>
</div>
</template>

<style lang="scss">
.bg-blue {
    background-color: var(--primary-color);
}

.bg-red {
    background-color: #f44336;
}

.bg-green {
    background-color: var(--surface-d)
}

.bg-gray {
    background-color: #dee2e6
}

.bg-orange {
    background-color: #eb9514;
}

.bg-green {
    background-color: #4fca29;
}

.custom-card {
    border-radius: .5rem;
    padding: 2rem 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
}

.margin-t4 {
    margin-top: 4rem;
}

.card-title {
    text-align: center;
}
</style>

<script lang="ts">
import {
    iServiceCardProps
} from '@/types/iServiceCardProps'
import Card from "primevue/card";
import {
    onMounted
} from 'vue';
export default {
    components: {
        Card,
    },
    props: {
        cardClass: {
            type: String,
            required: false,
            default: 'bg-blue'
        },
        icon: {
            type: String,
            required: false,
            default: 'fa-bullseye'
        },
        // Basic type check (`null` and `undefined` values will pass any type validation)
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    setup(props: iServiceCardProps) {

        onMounted(() => {
            console.log('title: ' + props.title)
        })

        const login = () => {}

        return {
            login,
            props
        }
    }
}
</script>
