<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";

const auth = useAuthStore()
</script>

<template>
  <div>
    <h1>Home</h1>
    <p v-if="auth.isLoggedIn">User is logged in</p>
    <p v-else>User is not logged in</p>
  </div>
</template>