<script setup lang="ts">
import { useCartStore } from '../stores/CartStore';

const cart = useCartStore()
    const props = defineProps({
        isOpen: Boolean,
        valueCart: Number
    })

</script>

<template> 
    <header class="w-full bg-white h-20 flex justify-center">
        <div style="max-width: 1200px;" class="pl-4 pr-4 flex items-center w-full h-full justify-between">
            <div class="flex items-center">
                <img src="src\assets\imgs\hamburguer.png" alt="aa" width="48" height="48">
                <h1 class="text-black font-bold text-xl pl-2">Meu Burguer APP</h1>
                <div style="height: 40px; border-left: 1px solid;" class="ml-4"></div>
                <span class="text-base font-medium text-gray-900 ml-3">{{props.isOpen ? "Aberto ​🟢" : "Fechado ​🔴​"}}​</span>
            </div>
            
            <div class="flex items-center cursor-pointer">
            
                <img class="ml-9" src="src/assets/icons/cart.svg" alt="carrinho">
                <div class="relative bottom-3 flex justify-center" style="border: black solid 1px; border-radius: 2rem;width: 2rem;background-color: black;">
                    <span class="text-white">{{ cart.quantityProductsInCart }}</span>
                </div>

            </div>

        </div>
    </header>


</template>

<style scoped>
</style>
