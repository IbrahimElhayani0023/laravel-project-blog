<template>
    <section>
        <h1 class="text-3xl underline text-center text-blue-500">Edit category</h1>
        <form @submit.prevent="EditCategory" >
            <InputText v-model="category.name" type="text" placeholder="category name" class="my-3" />
            <InputText v-model="category.discription" type="text" placeholder="category discription" class="my-3" />
            <Button>add category</Button>
        </form>
    </section>
</template>

<script setup>
import Button from '../../../components/Button.vue';
import InputText from '../../../components/InputText.vue';

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const category = ref({});
const router = useRouter();

onMounted( async () => {
    const response = await axios.get("/api/category/"+ router.currentRoute.value.params.id);
    category.value = response.data;
})
const EditCategory = async () => {
 const data = await axios.put("/api/category/"+ category.value.id, category.value);
    console.log(data);
    router.push({ name: "category" });
}

</script>