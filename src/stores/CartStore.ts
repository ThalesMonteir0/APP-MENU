import { defineStore } from "pinia";
import { ProductCart } from "../states/productsState";

export const useCartStore = defineStore('cart', {

    state: () => {
        return{
             productsCart: [] as ProductCart[]
        }
    },

    getters: {
        quantityProductsInCart() :number {
            let count = 0
             this.productsCart.forEach( (item:ProductCart) => { 
                count += item.quantity
            })

            return count
        },

        valueTotalProductsInCart():number {
            let count = 0
            this.productsCart.forEach((item:ProductCart) => {
                count += item.quantity * item.value
            });
            

            return count
        },
    },
    
    actions : {

    }

   
    
})
