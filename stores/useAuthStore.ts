import {defineStore} from 'pinia'

type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
}

type Credentials = {
    email: string;
    password: string;
    device_name: string;
}


export const useAuthStore = defineStore('auth', () => {

    const user = ref<User | null>(null)
    const isLoggedIn = computed(() => !!user.value)

    const fetchUser = async () => {
        const {data, error} = await useApiFetch("/user")
        if(!error.value){
            user.value = data.value as User
            return
        }
        user.value = null
    }

    const login = async (credentials: Credentials) => {

        const loginResponse = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        });

        // @ts-ignore
        const token = loginResponse.data.value?.token
        const tokenCookie = useCookie('_token')
        tokenCookie.value = token
        return loginResponse
    }


    const logout = async () => {
        await useApiFetch('/logout', {
            method: 'POST'
        })
        const tokenCookie = useCookie('_token')
        tokenCookie.value = undefined
        user.value = null;
    }

    return {user, login, isLoggedIn, fetchUser, logout}
})