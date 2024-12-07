<script setup lang="ts">
const { t } = useI18n();

const head = useLocaleHead();

useSeoMeta({
  description: t("seo.description"),
  ogTitle: t("seo.ogTitle"),
  ogDescription: t("seo.ogDescription"),
  ogImage: "/og-image.jpg",
  twitterTitle: t("seo.twitterTitle"),
  twitterDescription: t("seo.twitterDescription"),
  twitterImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});

useHeadSafe(head);

useHead(() => ({
  titleTemplate: title => (title ? `%s - App` : `App`),
  link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
}));
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
