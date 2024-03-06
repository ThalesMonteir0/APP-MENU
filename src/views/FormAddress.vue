<script setup lang="ts">
import { FwbInput, FwbTextarea,FwbButton  } from 'flowbite-vue'
import { reactive, watch } from 'vue';
import cartao from '../assets/imgs/card.svg'
import pix from '../assets/imgs/pix.svg'
import dinheiro from '../assets/imgs/cash.svg'
import {useGetCepService} from '../services/cepService'
import {verifyLengthCep} from '../composables/verifys'

const formDataAddress = reactive({
    cep: '',
    number: '',
    road: '',
    complement: '',
    typePayment: '',
    neighborhood: ''
})

const itensPayment = [
    {name: "Pix", logo: pix, value: "pix", width: 70, height: 70},
    {name: "Cartão", logo: cartao, value: "cartão", width: 50, height: 50},
    {name: "Dinheiro", logo: dinheiro, value: "dinheiro fisico", width: 50, height: 50},
]

watch(() => formDataAddress.cep, () => {
    if(verifyLengthCep(formDataAddress.cep)){
        getCep(formDataAddress.cep)
    }
})



const getCep = (cep:string) => {    
    useGetCepService(cep).then((res:any) => {
       if(res.data.erro){
        return
       }

        formDataAddress.road = res.data.logradouro
        formDataAddress.neighborhood = res.data.bairro

    }).catch((err:any) => {
        console.error(err)
    })
}


</script>

<template>
    <main class="w-full h-full flex justify-center">
        <section class="w-full" style="max-width: 1200px;">
            <form>
                <h1 class="text-2xl text-black font-bold mt-4">Seu Endereço</h1>
            <fwb-input
                class="mt-1 mb-1"
                v-model="formDataAddress.cep"
                required
                placeholder="Informe seu cep"
                label="CEP" 
            />
            <fwb-input
                class="mt-1 mb-1"
                v-model="formDataAddress.road"
                required
                placeholder="Informe sua rua/avenida"
                label="Rua/Avenida"         
            />
            <fwb-input
                class="mt-1 mb-1"
                v-model="formDataAddress.number"
                required
                placeholder="Informe o numero da casa ou apt"
                label="Número"         
            />
            <fwb-input
                class="mt-1 mb-1"
                v-model="formDataAddress.neighborhood"
                required
                placeholder="Informe o bairro"
                label="Bairro"         
            />
            <fwb-textarea
                class="mt-1 mb-1"
                 v-model="formDataAddress.complement"
                 :rows="4"
                 label="Complemento"
                 placeholder="Informe alguma observação adicional sobre o lanche ou endereço!"
              />

            </form>
            <section>
                <form>
                    <h1 class="text-2xl text-black font-bold mt-3 mb-3">Tipo de pagamento</h1>
                    <div v-for="itemPayment in itensPayment">
                        <div class="bg-white rounded flex items-center p-4"  style="min-height: 70px;">
                           
                                <input  type="radio" 
                                        class="mr-4" 
                                        :value="itemPayment.value" 
                                        :id="`input-${itemPayment.name}`" 
                                        name="inputTypePayment" 
                                        v-model="formDataAddress.typePayment">
                                <img :src="itemPayment.logo" 
                                     :alt="`logo ${itemPayment.name}`" 
                                     :width="itemPayment.width" 
                                     :height="itemPayment.height">
                                <label  :for="`input-${itemPayment.name}`" 
                                        class="ml-3">{{ itemPayment.name }}
                                </label>
                        </div>
                        <div class="separator"></div>
                    </div>
                </form>
            </section>  
            <section class="flex justify-end mt-2 mb-2">
                <FwbButton ty size="lg" color="green" @click="">Finalizar compra</FwbButton>
            </section>         
        </section>
    </main>
</template>

<style scoped>
.separator {
    width: 100%;
    height: 1px;
    background-color: #a8adad;
}

</style>