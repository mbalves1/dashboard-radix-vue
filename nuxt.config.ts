// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    'nuxt-lucide-icons'
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  lucide: {
    namePrefix: 'Icon'
  }
})
