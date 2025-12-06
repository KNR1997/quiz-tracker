/** Reset styles. */
import "@/styles/reset.css";
import "uno.css";
import "@/styles/global.scss";
import { setupRouter } from '@/router'
import { createApp } from "vue";
import { setupStore } from "@/store";
// @ts-ignore
import i18n from '~/i18n'
// import { setupDirectives } from './directives'
// @ts-ignore
import { useResize } from '@/utils'

import App from "./App.vue";

async function setupApp() {
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app)
  // setupDirectives(app)
  app.use(useResize)
  app.use(i18n)
  app.mount("#app");
}

setupApp();

// createApp(App).use(router).mount("#app");
