<template>
    <header class=" shadow-md bg-white"><FrontNav /></header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<script setup>
import FrontNav from '../../components/FrontNav.vue';
import Footer from '../../components/Footer.vue';
</script>

