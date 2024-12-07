<script setup lang="ts">
const { t } = useI18n();
const links = computed(() => [{ label: t("titles.home"), to: "/" }]);
</script>

<template>
  <div>
    <div class="tw-bg-gray-100 tw-py-4">
      <div class="tw-container tw-flex tw-justify-between tw-items-center">
        <nav>
          <ul class="tw-flex tw-gap-4 tw-list-none tw-m-0 tw-p-0">
            <li
              v-for="link in links"
              :key="link.to"
            >
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <LocaleSwitch />
        </div>
      </div>
    </div>

    <main class="tw-py-4">
      <slot />
    </main>
  </div>
</template>
