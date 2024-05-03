<template>
    <section class="container text-center my-14 text-3xl underline">
        welcome to my blog demo project
    </section>
    <div class="lg:w-1/3 md:w-1/2 sm:w-full m-auto relative mb-8">
        <label for="search">
            <svg
                class="w-6 h-6 text-gray-800 absolute top-[10px] bottom-0 left-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
            </svg>
        </label>

        <InputText v-model="search"  class="ps-10" id="search" />
    </div>
    <section class="flex flex-wrap gap-8 justify-center items-center container">
        <div
            v-for="post in filterPosts"
            :key="post.id"
            class="flex justify-center h-[400px] items-center bg-gray-100"
        >
            <div class="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    :src="post.image"
                    :alt="post.image"
                    class="w-full h-48 object-cover"
                />
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">
                        {{ post.title }}
                    </h2>
                    <p class="text-gray-600 mb-4">
                        {{ post.text }}
                    </p>
                    <router-link
                        :to="'post/' + post.slug"
                        class="text-blue-500 hover:underline"
                        >Read more</router-link
                    >
                    <div>
                        {{ post.category.name }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import InputText from "../../components/InputText.vue";
import { ref, onMounted, computed } from "vue";
const search = ref("");
const posts = ref([]);
const getPosts = async () => {
    const data = await axios.get("/api/product");
    posts.value = data.data.data;
    console.log(posts.value);
}

const filterPosts = computed(()=> posts.value.filter(post => post.title.includes(search.value)))

onMounted(async () => {
    await getPosts();
})
</script>
