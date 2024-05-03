<template>
    <header class="shadow-md bg-white"><FrontNav/></header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
import FrontNav from '../../components/FrontNav.vue';
</script>