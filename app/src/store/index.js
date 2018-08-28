"use strict";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// import {superStoreModule} from './super';
// import {adminStoreModule} from './admin';
// import {adminLogModule} from './admin/log';

const configuration = {
    strict: process.env.NODE_ENV !== "production",
    state: {
        asideWidth: "200px"
    },
    mutations: {},
    modules: {}
};
export const store = new Vuex.Store(configuration);
