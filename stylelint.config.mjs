// @ts-check

/** @type {import('stylelint').Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: "stylelint-config-recommended-vue",
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"] },
    ],
  },
};
