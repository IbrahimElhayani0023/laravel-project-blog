<template>
    <Auth>
        <form
            class="m-auto flex flex-col space-y-5 w-1/3 bg-white p-6 rounded-lg shadow-lg"
            @submit.prevent="hundlelogin"
        >
            <h2 class="text-2xl font-semibold">login</h2>
            <div>
                <InputText
                    placeholder="email"
                    type="email"
                    v-model="form.email"
                />
                <span class="text-red-500 text-sm" v-if="errors.email">{{
                    errors.email[0]
                }}</span>
            </div>

            <div>
                <InputText
                    placeholder="password"
                    type="password"
                    v-model="form.password"
                />
                <span class="text-red-500 text-sm" v-if="errors.password">{{
                    errors.password[0]
                }}</span>
            </div>
            <div>
                <Button class="w-full">Login</Button>
            </div>
        </form>
    </Auth>
</template>

<script setup>
// Imports
import Auth from "../../components/Auth.vue";
import Button from "../../components/Button.vue";
import InputText from "../../components/InputText.vue";
import { ref } from "vue";
import { useAuthStore } from "../../stores/authStore";
// Variables
const form = ref({});
const errors = ref({});
const authStore = useAuthStore();
// Methods
async function hundlelogin() {
try{
  await authStore.login(form.value);
}catch(err){
    errors.value = err.response.data.errors;
}}
</script>
