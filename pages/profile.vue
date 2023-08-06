<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

</script>

<template>
    <div>
        <h1>Profile</h1>
      <div>
        Current user
        <pre>
          {{ auth.user }}
        </pre>
      </div>
    </div>
</template>