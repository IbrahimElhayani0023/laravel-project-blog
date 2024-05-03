import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // FRONTEND ROUTES
        {
            path: "/",
            redirect: "/home",
            component: () => import("../pages/Frontend/FrontView.vue"),
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: () => import("../pages/Frontend/HomeView.vue"),
                },
                {
                    path: "/about",
                    name: "about",
                    component: () => import("../pages/Frontend/AboutView.vue"),
                },
            ]
        },
        // AUTH ROUTES
        {
            path: "/auth",
            redirect: "/login",
            meta: { Guest: true },
            component: () => import("../pages/Auth/AuthView.vue"),
            children: [
                {
                    path: "/login",
                    name: "login",
                    component: () => import("../pages/Auth/LoginView.vue"),
                },
                {
                    path: "/register",
                    name: "register",
                    component: () => import("../pages/Auth/RegisterView.vue"),
                },
            ]
        },
        // BACKEND ROUTES
        {
            path: "/app",
            redirect: "/profile",
            meta: { Auth: true },
            component: () => import("../pages/Backend/DashView.vue"),
            children: [
                {
                    path: "/profile",
                    name: "profile",
                    component: () => import("../pages/Backend/ProfileView.vue"),
                },
                {
                    path: "/product",
                    name: "product",
                    component: () => import("../pages/Backend/ProductView.vue"),
                },
                {
                    path: "/category",
                    name: "category",
                    component: () => import("../pages/Backend/category/CategoryView.vue"),
                },
                {
                    path: "/category/add",
                    name: "addcategory",
                    component: () => import("../pages/Backend/category/AddCategory.vue"),
                },
                {
                    path: "/category/edit/:id",
                    name: "editcategory",
                    component: () => import("../pages/Backend/category/EditCategory.vue"),
                }
            ]
        },
    ],
});

router.beforeEach((to, from) => {
    const authanticated = localStorage.getItem("Authanticated");
    if (to.meta.Auth && !authanticated) {
        return { name: "login" };
    } else if (to.meta.Guest && authanticated) {
        return { name: "profile" };
    }
})

export default router;