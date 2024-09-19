// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;',
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxt/icon", "vuetify-nuxt-module"],
});