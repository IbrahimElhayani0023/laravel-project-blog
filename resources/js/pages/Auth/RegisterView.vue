<template>
    <Auth>
        <form
            class="m-auto flex flex-col space-y-3 w-1/3 bg-white p-6 rounded-lg shadow-lg"
            @submit.prevent="hundleRegister"
        >
            <h2 class="text-2xl font-semibold">Register</h2>

            <div>
                <InputText placeholder="username" v-model="form.name" />
                <span class="text-red-500 text-sm" v-if="errors.name">{{ errors.name[0] }}</span>
            </div>
            <div>
                <InputText
                    placeholder="email"
                    type="email"
                    v-model="form.email"
                />
                <span class="text-red-500 text-sm" v-if="errors.email">{{ errors.email[0] }}</span>

            </div>
            <div>
                <InputText
                    placeholder="password"
                    type="password"
                    v-model="form.password"
                />
                <span class="text-red-500 text-sm" v-if="errors.password">{{ errors.password[0] }}</span>

            </div>
            <div>
                <InputText
                    placeholder="password confirm"
                    type="password"
                    v-model="form.password_confirmation"
                />
            </div>
            <div>
                <Button class="w-full">Register</Button>
            </div>
        </form>
    </Auth>
</template>

<script setup>
// imports
import Auth from "../../components/Auth.vue";
import Button from "../../components/Button.vue";
import InputText from "../../components/InputText.vue";
import { useAuthStore } from "../../stores/authStore";
import { ref } from "vue";
// variables
const form = ref({});
const errors = ref({});
const authStore = useAuthStore();
// methods
async function hundleRegister() {
    try {
     authStore.register(form.value);
    } catch (err) {
        errors.value = err.response.data.errors;
    }
}
</script>
