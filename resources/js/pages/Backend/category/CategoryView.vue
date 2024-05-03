<template>
<div class="w-full">

    <div class="flex justify-between items-center mt-7 mb-4">
            <h1 class="text-3xl underline">Category page</h1>
            <Button><router-link to="category/add">Add Category</router-link></Button>
        </div>

        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table
                            class="min-w-full text-left text-sm font-light text-surface"
                        >
                            <thead
                                class="border-b border-neutral-200 font-medium"
                            >
                                <tr>
                                    <th class="px-6 py-4">#</th>
                                    <th class="px-6 py-4">name</th>
                                    <th class="px-6 py-4">description</th>
                                    <th class="px-6 py-4">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="category in categories" class="border-b border-neutral-200">
                                    <td
                                        class="whitespace-nowrap px-6 py-4 font-medium"
                                    >
                                        {{ category.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ category.name }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ category.discription }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <button class="text-white rounded bg-blue-500 hover:bg-blue-800 px-3 py-1 mx-2"><router-link :to="`category/edit/${category.id}`">Edit</router-link></button>
                                        <button @click="deleteCategory(category.id)" class="text-white rounded bg-red-700 hover:bg-red-900 px-3 py-1 mx-2">Delete</button>
                                    </td>
                                </tr>
                         
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// imports
import Button from "../../../components/Button.vue";

import { ref , onMounted } from "vue";

// variables
const addCategory = ref(false);
const categories = ref({});

// methods

onMounted(async () => {
    const response = await axios.get("/api/category");
    categories.value = response.data;
})
function deleteCategory(categoryId) {
    axios.delete("/api/category/" + categoryId)
    .then(categories.value = categories.value.filter(category => category.id !== categoryId))
}
</script>
