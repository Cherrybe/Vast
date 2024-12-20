import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { GDialog } from "gitart-vue-dialog";
import "gitart-vue-dialog/dist/style.css";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
const pina = createPinia();
pina.use(piniaPluginPersistedstate);

app
  .use(pina)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
    transition: "slide",
    position: "top-right",
    dangerouslyHTML: true,
  })
  .component("GDialog", GDialog)
  .component("QuillEditor", QuillEditor)
  .mount("#app");
