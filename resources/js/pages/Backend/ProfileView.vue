<template>
    <h2 class="text-2xl p-3 ms-8">
        hello
        <span class="font-bold text-2xl text-blue-600">
            {{ user?.name }}
        </span>
    </h2>
    <div class="mt-5 font-semibold ms-11">
        Email :<span class="underline">{{ user?.email }}</span>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "../../stores/authStore";
const user = ref({});
const authStore = useAuthStore();

onMounted(async () => {
       await authStore.authanticated();
        user.value = authStore.user;
});
</script>
