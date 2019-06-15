"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const ShellComponent = () =>
    import(
        /* webpackChunkName: "group-shell" */ "components/ShellComponent.vue"
    );

const BadRequestComponent = () =>
    import(
        /* webpackChunkName: "group-shell" */ "components/BadRequestComponent.vue"
    );
const SiteOverviewComponent = () =>
    import(
        /* webpackChunkName: "group-shell" */ "components/SiteOverviewComponent.vue"
    );

const NabuDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/NabuDescriptionComponent.vue"
    );
const NabuCollectionViewerDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/NabuCollectionViewerDescriptionComponent.vue"
    );
const MobileCollectionViewerDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/MobileCollectionViewerDescriptionComponent.vue"
    );
const AngularOlacVisComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/AngularOlacVisComponent.vue"
    );
const DataLoaderDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/DataLoaderDescriptionComponent.vue"
    );
const DataServiceDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/DataServiceDescriptionComponent.vue"
    );
const WordgenDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/WordgenDescriptionComponent.vue"
    );
const RaspberryPiDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/RaspberryPiDescriptionComponent.vue"
    );
const FiftyWordsDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/50WordsDescriptionComponent.vue"
    );
const ElanLintDescriptionComponent = () =>
    import(
        /* webpackChunkName: "group-apps" */ "components/about/ElanLintDescriptionComponent.vue"
    );

const ExplorerComponent = () =>
    import(
        /* webpackChunkName: "group-explore" */ "components/olac-explorer/ExplorerComponent.vue"
    );
const ExplorerBrowseCountryComponent = () =>
    import(
        /* webpackChunkName: "group-explore" */ "components/olac-explorer/BrowseCountry/BrowseCountryComponent.vue"
    );
const ExplorerBrowseLanguageComponent = () =>
    import(
        /* webpackChunkName: "group-explore" */ "components/olac-explorer/BrowseLanguage/BrowseLanguageComponent.vue"
    );
const ExplorerLanguageVisualisationComponent = () =>
    import(
        /* webpackChunkName: "group-explore" */ "components/olac-explorer/ExploreCountry/LanguageVisualisationComponent.vue"
    );

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
                {
                    path: "/about/mobile-viewer",
                    component: MobileCollectionViewerDescriptionComponent
                },
                { path: "/about/olac-vis", component: AngularOlacVisComponent },
                {
                    path: "/about/data-loader",
                    component: DataLoaderDescriptionComponent
                },
                {
                    path: "/about/data-service",
                    component: DataServiceDescriptionComponent
                },
                {
                    path: "/about/wordgen",
                    component: WordgenDescriptionComponent
                },
                {
                    path: "/about/pi",
                    component: RaspberryPiDescriptionComponent
                },
                {
                    path: "/about/50words",
                    component: FiftyWordsDescriptionComponent
                },
                {
                    path: "/about/elan-lint",
                    component: ElanLintDescriptionComponent
                }
            ]
        },
        {
            path: "/olac-explorer",
            component: ExplorerComponent,
            children: [
                {
                    path: "browse-country",
                    name: "browseCountry",
                    component: ExplorerBrowseCountryComponent,
                    children: [
                        { path: ":country", name: "browseCountrySelection" }
                    ]
                },
                {
                    path: "browse-language",
                    name: "browseLanguage",
                    component: ExplorerBrowseLanguageComponent,
                    children: [
                        { path: ":language", name: "browseLanguageSelection" }
                    ]
                },
                {
                    path: "explore-country",
                    name: "exploreCountry",
                    component: ExplorerLanguageVisualisationComponent
                }
            ]
        }
    ]
});
