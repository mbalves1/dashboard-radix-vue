// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    'nuxt-lucide-icons',
    '@vee-validate/nuxt',
    '@nuxt/test-utils/module'
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
  pinia: {
    storesDirs: ['./stores/**'],
  },
  lucide: {
    namePrefix: 'Icon'
  },
  css: [
    '~/assets/style.scss'  
  ],
  veeValidate: {
    autoImports: true,
  },
})
