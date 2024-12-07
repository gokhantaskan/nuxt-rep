import * as Sentry from "@sentry/nuxt";

const IS_DEV = process.env.NODE_ENV === "development";

const sentryConfig = {
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: IS_DEV ? 1.0 : 0.3,
  debug: false,
};

Sentry.init({
  ...sentryConfig,
});
