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
    // Habilita o auto-importação para os componentes em `./components`
    global: true,
    dirs: [
      {
        path: './components',
        // Opcional: especifique extensões de arquivos
        extensions: ['vue', 'ts']
      }
    ]
  },
  globalDirectives: {
    defineEmits: {}
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  lucide: {
    namePrefix: 'Icon'
  },
})
