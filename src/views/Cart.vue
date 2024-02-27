<template>
    <main class="w-full h-full flex justify-center">
        <section class="w-full mt-4" style="max-width: 1200px;">
            <p class="text-xl text-black font-bold">Seus itens:</p>
            <div class=" bg-white rounded w-full mb-3 h-14 flex items-center justify-between" v-for="product in cart.productsCart">
                <span class="ml-2">{{ `Produto: ${product.title} `  }}</span>
                <div class="btn-quantity mr-2">
                    <button @click="decrementItemCart(product)" class="cursor-pointer">-</button>
                    <span>{{ product.quantity }}</span>
                     <button @click="product.quantity++" class="cursor-pointer">+</button>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex">
                    <p class="text-xl text-black font-bold">Total:</p>
                    <p  class="ml-3 text-black text-lg">{{ formatStringToCurrency(cart.valueTotalProductsInCart) }}</p>
                </div>
                <div>
                    <fwb-button size="lg" color="green" @click="redirectToPageCadastroOrFinalizaCompra">Comprar</fwb-button>
                </div>
               
            </div>
        </section>
    </main>
    
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/CartStore";
import { ProductCart } from "../states/productsState";
import { formatStringToCurrency} from "../composables/useFormatString"
import { FwbButton } from 'flowbite-vue'

    

const cart = useCartStore()

const decrementItemCart = (selectProduct:ProductCart) => {
    if(selectProduct.quantity > 1){
        selectProduct.quantity--
    }
}

const redirectToPageCadastroOrFinalizaCompra = () => {

}

</script>

<style scoped>
.btn-quantity {
    border: black 2px solid;
    width: 100px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

</style>