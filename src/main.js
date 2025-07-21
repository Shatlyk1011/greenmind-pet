import { createApp } from "vue"
import "./globals.scss"
import App from "./App.vue"

import LenisVue from "lenis/vue";

createApp(App).use(LenisVue).mount("#app");
