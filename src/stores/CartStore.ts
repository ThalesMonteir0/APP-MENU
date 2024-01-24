import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const count = ref(1)
   
    function increment() {
      count.value++
    }

    function decrement() {
        if (count.value > 1){
            count.value--
        }
      }
  
    return { count, increment,decrement }

})
