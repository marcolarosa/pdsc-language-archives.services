"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const ShellComponent = () =>
    import(/* webpackChunkName: "group-shell" */ "components/ShellComponent.vue");

const BadRequestComponent = () =>
    import(/* webpackChunkName: "group-shell" */ "components/BadRequestComponent.vue");
const SiteOverviewComponent = () =>
    import(/* webpackChunkName: "group-shell" */ "components/SiteOverviewComponent.vue");

const NabuDescriptionComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/NabuDescriptionComponent.vue");
const AngularOlacVisComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/AngularOlacVisComponent.vue");
const DataLoaderDescriptionComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/DataLoaderDescriptionComponent.vue");

export const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "*", name: "404", component: BadRequestComponent },
        {
            path: "/",
            component: ShellComponent,
            children: [
                { path: "/", component: SiteOverviewComponent },
                { path: "/about/nabu", component: NabuDescriptionComponent },
                { path: "/about/olac-vis", component: AngularOlacVisComponent },
                {
                    path: "/about/data-loader",
                    component: DataLoaderDescriptionComponent
                }
            ]
        }
    ]
});
