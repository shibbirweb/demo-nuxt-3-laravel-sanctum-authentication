import {useAuthStore} from "~/stores/useAuthStore";

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()

    console.log('loadUser Plugin')

    if(!auth.isLoggedIn){
        await auth.fetchUser();
    }

})