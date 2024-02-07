<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue';

</script>

<template>
    <HeaderApp :isOpen="false"/>
    <router-view/>
</template>

<style scoped>
</style>
