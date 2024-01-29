<script setup lang="ts">
import CardApp from './CardApp.vue';
import {Product, ProductCart} from  '../states/productsState.ts';
import { FwbModal, FwbButton } from 'flowbite-vue'
import { ref } from 'vue';
import {useModalStore} from '../stores/ModalStore.ts'

const props = defineProps({
    title: String,
    SectionProduct: Array<Product>
})

const openModal = ref(false)

const modal = useModalStore()

const showModal = (emitValue: boolean) => {  
    openModal.value = emitValue
    if (emitValue == false) modal.count = 1
}

const addProductToCart = () => {
    // let productCart: ProductCart = {
    //     description: modal.product.description !== undefined ? modal.product.description: "",
    //     title: 

    // }



}


</script>

<template>
    <div>
        <fwb-modal v-if="openModal" size="5xl" @close="showModal(false)">
            <template #header>
                <div class="flex items-center text-lg">
                    Adicione o seu pedido ao carrinho!
                </div>
            </template>
            <template #body>
                <div class="grid grid-cols-2">
                    <div>
                        <img :src="modal.product.src"
                            alt="" class="w-full h-full">
                    </div>
                    <div class="ml-4 grid grid-rows-2">
                        <div>
                            <div>
                                <span class="font-semibold font-black text-2xl">{{ modal.product.title }}</span>
                            </div>
                            <div>
                                <span>{{ modal.product.description }}</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-end w-full h-full">
                                <div class="flex items-end">
                                    <div class="btn-quantity mr-2">
                                        <button @click="modal.decrement" class="cursor-pointer">-</button>
                                        <span>{{ modal.count }}</span>
                                        <button @click="modal.increment" class="cursor-pointer">+</button>
                                    </div>
                                    <fwb-button size="lg" color="green" @click="addProductToCart">Adicionar</fwb-button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </template>
        </fwb-modal>

        <div>
            <span class="text-lg text-black font-bold">{{ props.title }}</span>
        </div>
        <div class="grid md:grid-cols-2">
            <CardApp :products="props.SectionProduct" @change-show-modal="showModal"/>
        </div>
    </div>
</template>


<style scoped>
.btn-quantity {
    border: black 2px solid;
    width: 110px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>