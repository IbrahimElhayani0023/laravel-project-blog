<template>
    <section>
        <h1 class="text-3xl underline text-center text-blue-500">add category</h1>
        <form @submit.prevent="addCategory" >
            <InputText v-model="category.name" type="text" placeholder="category name" class="my-3" />
            <InputText v-model="category.discription" type="text" placeholder="category discription" class="my-3" />
            <Button>add category</Button>
        </form>
    </section>
</template>

<script setup>
import Button from '../../../components/Button.vue';
import InputText from '../../../components/InputText.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const category = ref({});
const router = useRouter();

const addCategory = async () => {
 const data = await axios.post("/api/category", category.value);
    router.push({ name: "category" });
}

</script>
