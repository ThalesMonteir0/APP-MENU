import { defineStore } from "pinia"
import {reactive, ref} from "vue"
import { Product } from "../states/productsState"

export const useModalStore = defineStore('modal', () => {
    const count = ref(1)
    const product: Partial<Product> = reactive({})
   
    function increment() {
      count.value++
    }

    function decrement() {
        if (count.value > 1){
            count.value--
        }
      }
  
    return { count, increment,decrement,product }

})