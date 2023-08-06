<script setup>
import {useAuthStore} from "~/stores/useAuthStore";

const auth = useAuthStore()

const handleLogout = async () => {
  await auth.logout()
  navigateTo('/login')
}

</script>
<template>
    <div>
      <div v-if="auth.isLoggedIn">
        {{ auth.user }}
      </div>

      <div v-if="auth.isLoggedIn">
        <button @click.prevent="handleLogout">Logout</button>
      </div>

        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li v-if="!auth.isLoggedIn">
                <nuxt-link to="/login">Login</nuxt-link>
            </li>
            <li v-if="!auth.isLoggedIn">
                <nuxt-link to="/registration">Registration</nuxt-link>
            </li>
            <li v-if="auth.isLoggedIn">
                <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>