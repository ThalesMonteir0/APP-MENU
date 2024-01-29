import { defineStore } from "pinia";
import { reactive } from "vue";
import { ProductCart } from "../states/productsState";

export const useCartStore = defineStore('cart', () => {
   
    const productsCart: Partial<ProductCart[]> = reactive([])

    return{productsCart}

})
