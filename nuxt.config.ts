// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: false, 

  modules: ["@nuxtjs/tailwindcss", "nuxt-vuefire"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false,
    },
    config: { 
      apiKey: "AIzaSyCAf5SoJB_noxRDgbXItzS1JEkxr7bihKw",
      authDomain: "nuxt-yizehuang.firebaseapp.com",
      projectId: "nuxt-yizehuang",
      storageBucket: "nuxt-yizehuang.firebasestorage.app",
      messagingSenderId: "29198627928",
      appId: "1:29198627928:web:1ba8ab6ca11cfa1400c62d"
    },
  },
});