"use strict";

import { http } from "./http.service";

export default class ExplorerService {
    constructor() {}

    async getDates() {
        const self = this;

        let uri = `/dates`;
        return (await http.get(uri)).data.dates;
    }

    async getRegions() {
        const self = this;

        let uri = `/regions`;
        return (await http.get(uri)).data.regions;
    }

    async getCountries() {
        const self = this;

        let uri = `/countries`;
        return (await http.get(uri)).data.countries;
    }

    async getCountryData(country) {
        const self = this;

        let uri = `/countries/${country}/stats`;
        return (await http.get(uri)).data;
    }

    async getLanguageData({ code }) {
        const self = this;

        let uri = `/languages/${code}`;
        return (await http.get(uri)).data.harvests[0].metadata;
    }
}
