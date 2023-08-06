<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore"

definePageMeta({
  middleware: 'guest'
})

const form = ref({
  email: "test@example.com",
  password: "password",
  device_name: "Nuxt",
});

const auth = useAuthStore();

const handleLogin = async () => {
  const {error} = await auth.login(form.value)

  if(!error.value){
    // fetch current user
    await auth.fetchUser()

    navigateTo('/')
  }else {
    // handle error
  }




  // login
  // const {data:loginData, pending, error, status} = await useFetch("http://nuxt-login.test/api/login", {
  //     method: "POST",
  //     body: form.value,
  //     watch: false
  // });


  // const {data:loginData, pending, error, status} = await useApiFetch("/login", {
  //     method: "POST",
  //     body: form.value,
  // });

  // const token = loginData?.value?.token

  // const tokenCookie = useCookie('_token')
  // tokenCookie.value = token

  // console.log('token', token);


  // // fetch current user
  // const {data: user} = await useApiFetch("/user")

  // console.log('logged in user', user);


}

</script>

<template>
  <div>
    <h1>login</h1>
    <div>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <br>
          <input type="text" id="email" v-model="form.email"/>
        </div>

        <div>
          <label for="password">Password</label>
          <br>
          <input type="text" id="password" v-model="form.password"/>
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
