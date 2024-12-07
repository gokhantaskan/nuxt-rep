<script setup lang="ts">
import { useI18n } from "vue-i18n";
import * as Sentry from "@sentry/nuxt";

definePageMeta({
  name: "HomePage",
  layout: "app",
});

function triggerClientError() {
  throw new Error("Nuxt Button Error");
}

function getSentryData() {
  Sentry.startSpan(
    {
      name: "Example Frontend Span",
      op: "test",
    },
    async () => {
      await useFetch("/api/sentry-example-api");
    }
  );
}

const { t } = useI18n();

useHead({
  title: t("titles.home"),
});
</script>

<template>
  <div class="tw-container tw-space-y-4">
    <h1 class="tw-text-2xl tw-font-bold tw-mb-4">{{ t("titles.home") }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quibusdam ipsa molestias culpa
      animi odio minus iste quia itaque pariatur!
    </p>
    <div class="tw-flex tw-gap-2">
      <button
        id="errorBtn"
        @click="triggerClientError"
      >
        Throw Client Error
      </button>
      <button
        type="button"
        @click="getSentryData"
      >
        Throw Server Error
      </button>
    </div>
  </div>
</template>
