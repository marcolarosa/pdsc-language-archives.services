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
    import(/* webpackChunkName: "group-apps" */ "components/about/NabuDescriptionComponent.vue");
const NabuCollectionViewerDescriptionComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/about/NabuCollectionViewerDescriptionComponent.vue");
const AngularOlacVisComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/about/AngularOlacVisComponent.vue");
const DataLoaderDescriptionComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/about/DataLoaderDescriptionComponent.vue");
const DataServiceDescriptionComponent = () =>
    import(/* webpackChunkName: "group-apps" */ "components/about/DataServiceDescriptionComponent.vue");

const OlacExplorerComponent = () =>
    import(/* webpackChunkName: "group-explore" */ "components/olac-explorer/OlacExplorerComponent.vue");

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
                {
                    path: "/about/nabu-viewer",
                    component: NabuCollectionViewerDescriptionComponent
                },
                { path: "/about/olac-vis", component: AngularOlacVisComponent },
                {
                    path: "/about/data-loader",
                    component: DataLoaderDescriptionComponent
                },
                {
                    path: "/about/data-service",
                    component: DataServiceDescriptionComponent
                }
            ]
        },
        {
            path: "/olac-explorer",
            component: OlacExplorerComponent
        }
    ]
});
