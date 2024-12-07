import * as Sentry from "@sentry/nuxt";

const IS_DEV = process.env.NODE_ENV === "development";

const sentryConfig = {
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: IS_DEV ? 1.0 : 0.3,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
};

Sentry.init({
  ...sentryConfig,
  trackComponents: true,
  hooks: ["activate", "create", "destroy", "mount", "update", "unmount"],
  integrations: [Sentry.replayIntegration()],
});
