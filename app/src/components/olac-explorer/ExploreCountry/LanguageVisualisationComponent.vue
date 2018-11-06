<template>
    <div>
        <div class="row my-4">
            <div class="col">
                <el-select v-model="selectedCountry" class="style-select" placeholder="Select a country" filterable @change="saveSelectedCountry">
                    <el-option v-for="country in countries" :key="country" :label="country" :value="country">
                    </el-option>
                </el-select>
            </div>
            <div class="col">
                <el-select v-model="selectedResourceType" class="style-select" placeholder="Map resource type" clearable @change="updateMap">
                    <el-option v-for="type in resourceTypes" :key="type" :label="type" :value="type">
                    </el-option>
                </el-select>
            </div>
            <div class="col">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="success" v-if="percentage"></el-progress>
            </div>
        </div>
        <div class="row">
            <div class="col">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="map" class="style-map"></div>
            </div>
        </div>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import Vue from "vue";
import { router } from "routes";
import {
    extractResourceTypes,
    generateMapData
} from "./language-vis-component.lib.js";

mapboxgl.accessToken =
    "pk.eyJ1IjoibWFyY29sYXJvc2EiLCJhIjoiY2pvM2pjMW9kMHhmODNxcmxsMTd2cWkzcCJ9.jpWvN4mzM5M6ijwkSI2CfA";

export default {
    data() {
        return {
            selectedCountry: undefined,
            selectedResourceType: undefined,
            map: undefined
        };
    },
    computed: {
        percentage: function() {
            let loading = this.$store.state.explorerStore.loading;
            if (loading === 0 || loading === 100) {
                return undefined;
            } else {
                return loading;
            }
        },
        countries: function() {
            return this.$store.state.explorerStore.countries;
        },
        resourceTypes: function() {
            let languages = this.$store.state.explorerStore.browseByCountry
                .languages;
            if (!languages) return [];
            return extractResourceTypes(languages);
        },
        languages: function() {
            let languages = this.$store.state.explorerStore.browseByCountry
                .languages;
            if (!languages) return [];
            this.updateMap();
            return languages;
        }
    },
    watch: {
        languages: () => {}
    },
    mounted() {
        this.$store.commit("explorerStore/resetCountryState");
        this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/dark-v9",
            center: [0, 0],
            zoom: 1
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.FullscreenControl());
    },
    methods: {
        saveSelectedCountry(country) {
            this.$store.commit("explorerStore/saveSelectedCountry", country);
            this.$store.dispatch("explorerStore/getCountryData");
        },
        async updateMap() {
            const self = this;
            if (!self.map) return;
            if (self.map.getSource("languages")) {
                self.map = self.map.removeLayer("data");
                self.map = self.map.removeSource("languages");
            }
            await sleep(100);

            const data = generateMapData({
                languages: self.languages,
                types: self.resourceTypes,
                selectedType: self.selectedResourceType
            });

            self.map.addSource("languages", {
                type: "geojson",
                data
            });

            self.map.addLayer({
                id: "data",
                type: "circle",
                source: "languages",
                paint: {
                    "circle-color": [
                        "interpolate-hcl",
                        ["linear"],
                        ["get", "total"],
                        20,
                        "red",
                        40,
                        "orange",
                        100,
                        "green"
                    ],
                    "circle-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        5,
                        5,
                        6,
                        10,
                        20
                    ]
                }
            });

            // self.map.addLayer({
            //     id: "data",
            //     type: "fill-extrusion",
            //     source: "languages",
            //     paint: {
            //         "fill-extrusion-color": [
            //             "interpolate-hcl",
            //             ["linear"],
            //             ["get", "total"],
            //             20,
            //             "red",
            //             40,
            //             "orange",
            //             100,
            //             "green"
            //         ],
            //         "fill-extrusion-height": [
            //             "interpolate",
            //             ["linear"],
            //             ["get", "total"],
            //             20,
            //             20,
            //             40,
            //             40,
            //             100,
            //             100
            //         ],
            //         "fill-extrusion-base": 0
            //     }
            // });

            var bounds = new mapboxgl.LngLatBounds();
            data.features.forEach(language => {
                bounds.extend(language.geometry.coordinates);
            });
            self.map.fitBounds(bounds, { padding: 50 });

            // Create a popup, but don't add it to the map yet.
            const popup = new mapboxgl.Popup({
                closeButton: false
            });

            self.map.on("mouseenter", "data", function(e) {
                // Change the cursor style as a UI indicator.
                self.map.getCanvas().style.cursor = "pointer";

                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] +=
                        e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                // Populate the popup and set its coordinates
                // based on the feature found.
                const type = self.selectedResourceType
                    ? self.selectedResourceType
                    : "total";
                const properties = e.features[0].properties;
                const template = `
                    <div>
                        <h4>
                            <router-link to="/olac-explorer/browse-language/${
                                properties.code
                            }">
                                ${properties.name} (${properties.code})
                            </router-link>
                        </h4>

                        Resources - ${type}: ${properties.total}<br/>
                        Status: ${properties.status}
                    </div>
                `;
                const popupContent = Vue.extend({
                    router,
                    template
                });

                popup
                    .setLngLat(coordinates)
                    .setHTML('<div id="vue-popup-content"></div>')
                    .addTo(self.map);
                new popupContent().$mount("#vue-popup-content");
            });

            self.map.on("mouseleave", "data", function() {
                self.map.getCanvas().style.cursor = "";
            });

            self.map.on("click", "data", function(e) {
                self.map.flyTo({
                    center: e.features[0].geometry.coordinates,
                    zoom: 5
                });
            });
        }
    }
};

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => resolve(), time);
    });
}
</script>

<style lang="scss" scoped>
.style-map {
    width: 100%;
    height: calc(100vh - 120px);
}

.style-select {
    width: 100%;
}
</style>
