<template>
    <nav
        class="bg-white h-[80px] shadow-lg flex items-center justify-end py-3 px-6"
    >
        <Button @click="authStore.logout()">Logout</Button>
    </nav>
</template>

<script setup>
import { useAuthStore } from "../stores/authStore";
import Button from "./Button.vue";
const authStore = useAuthStore();
</script>
