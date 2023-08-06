// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBaseURL: 'http://nuxt-login.test/api'
    }
  }
})
