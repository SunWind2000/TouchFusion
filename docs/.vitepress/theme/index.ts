import DefaultTheme from "vitepress/theme";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import DemoContainer from "../components/demo-container/demo.vue";
import AttrTable from "../components/attr-table/table.vue";

import type { Theme } from "vitepress";

import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(ElementPlus);
    app.component("demo", DemoContainer);
    app.component("attr-table", AttrTable);
  }
} as Theme
