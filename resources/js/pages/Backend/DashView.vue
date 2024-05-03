<template>
    <div class="flex">
        <menu class="w-[300px] bg-slate-900 h-screen">
        <Sidbar/>    
        </menu>
        <main class="w-full">
            <BackNav/>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import Sidbar from '../../components/SideBar.vue';
import BackNav from '../../components/BackNav.vue';
</script>
