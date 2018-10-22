"use strict";

import { http } from "./http.service";

export default class ExplorerService {
    constructor() {}

    async getDates() {
        let uri = `/dates`;
        return (await http.get(uri)).data.dates;
    }

    async getRegions() {
        let uri = `/regions`;
        return (await http.get(uri)).data.regions;
    }

    async getCountries() {
        let uri = `/countries`;
        return (await http.get(uri)).data.countries;
    }

    async getCountryData({ country, date }) {
        let uri;
        if (!date) {
            uri = `/countries/${country}/stats`;
        } else {
            uri = `/countries/${country}/stats?date=${date}`;
        }
        return (await http.get(uri)).data;
    }

    async getLanguageData({ code, date }) {
        let uri;
        if (!date) {
            uri = `/languages/${code}`;
        } else {
            uri = `/languages/${code}?date=${date}`;
        }
        return (await http.get(uri)).data.harvests[0].metadata;
    }
}
