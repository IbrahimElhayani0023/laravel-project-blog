<template>
    <div class="text-white my-5 mx-3 font-bold text-2xl">dashboard</div>
    <ul class="flex flex-col">
        <li class="hover:bg-gray-600 p-3 w-full rounded-md duration-150 my-1"><router-link class="text-white cursor-pointer inline-block h-full w-full" to="/profile">Profile</router-link></li>
        <li class="hover:bg-gray-600 p-3 w-full rounded-md duration-150 my-1"><router-link class="text-white cursor-pointer inline-block h-full w-full" to="/category">Category</router-link></li>
        <li class="hover:bg-gray-600 p-3 w-full rounded-md duration-150 my-1"><router-link class="text-white cursor-pointer inline-block h-full w-full" to="/product">Product</router-link></li>
        <li class="hover:bg-gray-600 p-3 w-full rounded-md duration-150 my-1"><router-link class="text-white cursor-pointer inline-block h-full w-full" to="/">Front</router-link></li>
    </ul>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
   color: white;
}
li:has(.router-link-active) {
    background: #5a5a5a;
}
</style>