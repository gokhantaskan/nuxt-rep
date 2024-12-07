<script setup lang="ts">
type Locales = "tr" | "en";

const { setLocale, locale } = useI18n();

function handleLocaleChange(e: Event) {
  setLocale((e.target as HTMLSelectElement).value as Locales);
}
</script>

<template>
  <ClientOnly>
    <form>
      <select
        id="locale-select"
        :value="locale"
        :aria-label="$t('language')"
        @change="handleLocaleChange"
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </form>
  </ClientOnly>
</template>
