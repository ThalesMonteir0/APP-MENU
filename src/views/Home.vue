<template>
    <main>
        <article class="w-full flex justify-center h-full mt-4">
            <section class="w-full" style="max-width: 1200px;">
                <SearchApp />
            </section>
        </article>

        <article class="w-full flex justify-center h-full mt-4">
            <section class="w-full h-full" style="max-width: 1200px;">
                <SectionItens :SectionProduct="productsObject" title="HAMBURGUER" />
                <SectionItens :SectionProduct="productsObject" title="SOBREMESAS" />
            </section>
        </article>
    </main>
</template>

<script setup lang="ts">
import SearchApp from '../components/SearchApp.vue';
import SectionItens from '../components/SectionItens.vue';

let productsObject = [
    { title: 'Double burguer', price: 21.5, description: 'Delicioso hambuguer com 2 carnes, queijo e molho especial.', src: "https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg" },
    { title: 'Triple burguer', price: 25.5, description: 'Delicioso hambuguer com 3 carnes, queijo e molho especial.', src: "https://www.estadao.com.br/resizer/YIBfPUoXUOKRYG7IVo-jptwsSFY=/720x503/filters:format(jpg):quality(80):focal(3070x2285:3080x2295)/cloudfront-us-east-1.images.arcpublishing.com/estadao/L3LYN5Y4MRG6BB47MNHEEXDRGA.jpeg" }
]

</script>

<style scoped>

</style>