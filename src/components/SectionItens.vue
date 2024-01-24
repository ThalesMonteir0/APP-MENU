<script setup lang="ts">
import CardApp from './CardApp.vue';
import {Product} from  '../states/productsState.ts';
import { FwbModal, FwbButton } from 'flowbite-vue'
import { ref } from 'vue';
import {useCartStore} from '../stores/CartStore.ts'

const props = defineProps({
    title: String,
    SectionProduct: Array<Product>
})

const openModal = ref(false)

const cart = useCartStore()

const showModal = (emitValue: boolean) => {  
    openModal.value = emitValue
    if (emitValue == false) cart.count = 1
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
                        <img src="https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg"
                            alt="" class="w-full h-full">
                    </div>
                    <div class="ml-4 grid grid-rows-2">
                        <div>
                            <div>
                                <span class="font-semibold font-black text-2xl">Double burguer</span>
                            </div>
                            <div>
                                <span>Delicioso hambuguer com 2 carnes, queijo e molho especial.</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-end w-full h-full">
                                <div class="flex items-end">
                                    <div class="btn-quantity mr-2">
                                        <button @click="cart.decrement" class="cursor-pointer">-</button>
                                        <span>{{ cart.count }}</span>
                                        <button @click="cart.increment" class="cursor-pointer">+</button>
                                    </div>
                                    <fwb-button size="lg" color="green">Adicionar</fwb-button>
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