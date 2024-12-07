export default defineNuxtPlugin({
  name: "locale",
  hooks: {
    "app:created": () => {
      const nuxtApp = useNuxtApp();
      const dayjs = nuxtApp.$dayjs;
      const i18n = nuxtApp.$i18n;
      dayjs.locale(i18n.locale.value);
    },
    "i18n:beforeLocaleSwitch": ({ newLocale }) => {
      const nuxtApp = useNuxtApp();
      const dayjs = nuxtApp.$dayjs;
      dayjs.locale(newLocale);
    },
  },
});
