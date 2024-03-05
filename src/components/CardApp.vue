<script setup lang="ts">
import { Product } from '../states/productsState.ts';
import {formatStringToCurrency} from '../composables/useFormatString'
import { useModalStore } from '../stores/ModalStore';

const props = defineProps({
    products: Array <Product>,
});

const modal = useModalStore()

const emit = defineEmits(['changeShowModal'])

const updateShowModalEmit = (product: Product) => {
    emit('changeShowModal', true)
    modal.product = product
}


</script>

<template>
        <div v-for="product of props.products" 
        class="bg-white rounded grid grid-cols-2 m-2 hover:shadow-xl transition-shadow duration-500 cursor-click"
        @click="updateShowModalEmit(product)" >
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
                    Por apenas: {{formatStringToCurrency(product.price) }}
                </span>
            </div>
        </div>
</template>

<style scoped>
.cursor-click{
    cursor: pointer;
}
</style>