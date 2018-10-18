"use strict";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { explorerStoreModule } from "./explorer";

const configuration = {
    strict: process.env.NODE_ENV !== "production",
    state: {
        asideWidth: "200px"
    },
    mutations: {},
    modules: {
        explorerStore: explorerStoreModule
    }
};
export const store = new Vuex.Store(configuration);
