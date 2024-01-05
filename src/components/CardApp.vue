<script setup lang="ts">
import { Product } from '../states/productsState.ts';

const props = defineProps({
    products: Array <Product>,
});


</script>

<template>
        <div v-for="product of props.products" class="bg-white rounded grid grid-cols-2 m-2 hover:shadow-xl transition-shadow duration-500 cursor-click">
            <div>
                <img class="h-full"
                :src="product.src"
                alt="hamburguer imagem">
            </div>
            <div class="p-4 text-sm flex flex-col ">
                <h4 class="text-lg font-bold">
                    {{product.title }}
                </h4>
                <span>{{ product.description }}</span>

                <span style="display: flex; -webkit-box-flex: 1; flex-grow: 1; align-items: flex-end; width: 100%; ">
                    Por apenas: {{ product.price }}
                </span>
            </div>
        </div>
</template>

<style scoped>
.cursor-click{
    cursor: pointer;
}
</style>

