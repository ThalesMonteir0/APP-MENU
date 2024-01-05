<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue';
import SearchApp from './components/SearchApp.vue';
import SectionItens from './components/SectionItens.vue';
import { FwbModal, FwbButton } from 'flowbite-vue'


let productsObject = [
    { title: 'Double burguer', price: 21.5, description: 'Delicioso hambuguer com 2 carnes, queijo e molho especial.', src: "https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg" },
    { title: 'Double burguer', price: 21.5, description: 'Delicioso hambuguer com 2 carnes, queijo e molho especial.', src: "https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg" }
]

</script>

<template>
    <HeaderApp :isOpen="false" :valueCart="2" />
    <main>

        <fwb-modal v-if="true" size="5xl">
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
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                    <fwb-button size="lg" color="green">Adicionar</fwb-button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </template>
        </fwb-modal>

        <article class="w-full flex justify-center h-full mt-4">
            <section class="w-full" style="max-width: 1200px;">
                <SearchApp />
            </section>
        </article>

        <article class="w-full flex justify-center h-full mt-4">
            <section class="w-full h-full" style="max-width: 1200px;">
                <SectionItens :SectionProduct="productsObject" title="HAMBURGUER" />
                <SectionItens :SectionProduct="productsObject" title="SOBREMEAS" />

            </section>
        </article>
    </main>
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
