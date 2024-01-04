<script setup lang="ts">
import CardApp from './CardApp.vue';
import {Product} from  '../states/productsState.ts';

const props = defineProps({
    title: String,
    SectionProduct: Array<Product>
})
</script>

<template>
    <div>
        <div>
            <span class="text-lg text-black font-bold">{{ props.title }}</span>
        </div>
        <div class="grid md:grid-cols-2">
            <CardApp :products="props.SectionProduct"/>
        </div>
    </div>
</template>


<style scoped
>
</style>