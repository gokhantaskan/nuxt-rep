// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@sentry/nuxt/module",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
  ],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  tailwindcss: {
    cssPath: "./assets/styles/tailwind.css",
  },
  css: ["./assets/styles/main.scss"],
  runtimeConfig: {},
  sourcemap: { client: "hidden" },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-13",
  nitro: {
    experimental: {
      openAPI: true,
      asyncContext: true,
      websocket: true,
    },
  },
  typescript: {
    typeCheck: true,
  },
  dayjs: {
    locales: ["tr", "en"],
    plugins: ["relativeTime", "utc", "timezone", "localizedFormat"],
    defaultLocale: "tr",
    defaultTimezone: "Europe/Istanbul",
  },
  eslint: {
    config: {
      stylistic: false,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "local",
        dir: "./app/assets/icons",
      },
    ],
    mode: "svg",
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  i18n: {
    lazy: true,
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    defaultLocale: "tr",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      {
        code: "tr",
        language: "tr-TR",
        file: "tr-TR.json",
      },
      {
        code: "en",
        language: "en-US",
        file: "en-US.json",
      },
    ],
  },
  // @ts-ignore
  sentry: {
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  },
  build: {
    transpile: ["drizzle-orm"],
  },
  devServer: {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    https: {
      cert: "./localhost+4.pem",
      key: "./localhost+4-key.pem",
    },
  },
});
