"use strict";

import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(ElementUI, { locale });

import App from "components/app.vue";
import { router } from "routes";
import { store } from "store";
// import { http } from "services/http.service";

// Vue.prototype.inteja = { configuration };
// Vue.prototype.$http = http;
App.router = router;
App.store = store;
const app = new Vue(App);
