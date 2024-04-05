import DefaultTheme from "vitepress/theme";

import type { Theme } from "vitepress";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
  }
} as Theme
