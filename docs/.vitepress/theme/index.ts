import DefaultTheme from "vitepress/theme";
import DemoContainer from "../components/demo-container/demo.vue";

import type { Theme } from "vitepress";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("demo", DemoContainer);
  }
} as Theme
