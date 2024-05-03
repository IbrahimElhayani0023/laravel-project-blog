import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";
export const useAuthStore = defineStore("auth", () => {
    const user = ref({});
    const router = useRouter();
    async function login(form) {
        await axios.post("/api/login", form);
        localStorage.setItem("Authanticated", "true");
        router.push("/profile");
    }
    async function register(form) {
        await axios.post("/api/register", form);
        localStorage.setItem("Authanticated", "true");
        router.push('/profile');
    }
    async function logout() {
        await axios.post("/api/logout");
        localStorage.removeItem("Authanticated");
        router.push("/login");
    }

    async function authanticated() {
        try {
            const response = await axios.get("/api/user");
            user.value = response.data;
        } catch (err) {
            if (err.response.status === 401) {
                localStorage.removeItem("Authanticated");
                router.push({ name: "login" });
            }
        }
    }
    return {
        user,
        login,
        register,
        logout,
        authanticated
    };
})