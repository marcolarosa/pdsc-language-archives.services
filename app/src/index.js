"use strict";

import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import VueScrollTo from "vue-scrollto";
import { VueMasonryPlugin } from "vue-masonry";
import VueAnalytics from "vue-analytics";
Vue.use(ElementUI, { locale });
Vue.use(VueScrollTo);
Vue.use(VueMasonryPlugin);

import App from "components/app.vue";
import { router } from "routes";
import { store } from "store";

const isProd = process.env.NODE_ENV === "production";
Vue.use(VueAnalytics, {
    id: "UA-36256674-3",
    router,
    debug: {
        isProd: !isProd,
        sendHitTask: isProd
    }
});

// Vue.prototype.inteja = { configuration };
App.router = router;
App.store = store;
const app = new Vue(App);
