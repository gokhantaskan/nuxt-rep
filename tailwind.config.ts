import type { Config } from "tailwindcss";

export default <Config>{
  content: [],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
        },
      },
    },
  },
  plugins: [],
};
