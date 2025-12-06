/** Reset styles. */
import "@/styles/reset.css";
import "uno.css";
import "@/styles/global.scss";
import { setupRouter } from '@/router'
import { createApp } from "vue";
import { setupStore } from "@/store";

import App from "./App.vue";

async function setupApp() {
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app)
  // app.use(router);
  app.mount("#app");
}

setupApp();

// createApp(App).use(router).mount("#app");
