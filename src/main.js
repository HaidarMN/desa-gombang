import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

import "boxicons";

import router from "./router/index";

import moment from "moment/min/moment-with-locales";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$moment = {
  formatDate(value) {
    return moment(value).locale("id").format("Do MMMM YYYY");
  },
};
app.mount("#app");
