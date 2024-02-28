<script setup lang="ts">
import { FwbInput, FwbTextarea  } from 'flowbite-vue'
import { reactive } from 'vue';

const formDataAddress = reactive({
    cep: '',
    numero: '',
    road: '',
    complement: ''
})


</script>

<template>
    <main class="w-full h-full flex justify-center">
        <section class="w-full" style="max-width: 1200px;">
            <p class="text-2xl text-black font-bold mt-6">Cadastre seu Endereço</p>
            <fwb-input
                v-model="formDataAddress.cep"
                required
                placeholder="Informe seu cep"
                label="CEP"         
            />
            <fwb-input
                v-model="formDataAddress.numero"
                required
                placeholder="Informe sua rua/avenida"
                label="Rua/Avenida"         
            />
            <fwb-input
                v-model="formDataAddress.road"
                required
                placeholder="Informe o numero da casa ou apt"
                label="Número"         
            />
            <fwb-textarea
                 v-model="formDataAddress.complement"
                 :rows="4"
                 label="Complemento"
              />
            

        </section>

    </main>
    
</template>

<style lang="scss" scoped>

</style>