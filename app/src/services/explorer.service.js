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

    async getLanguages(date) {
        let uri;
        if (!date) {
            uri = `/languages`;
        } else {
            uri = `/languages?date=${date}`;
        }
        return (await http.get(uri)).data.languages;
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
        let uri = `/languages/${code}?date=${date}`;
        try {
            let data = (await http.get(uri)).data;
            return data.language.harvests[0].metadata;
        } catch (error) {
            return {};
        }
    }

    async getLanguageResources({ code, date }) {
        let uri = `/languages/${code}/resources?date=${date}`;
        try {
            let data = (await http.get(uri)).data;
            return data.language.resources;
        } catch (error) {
            return {};
        }
<<<<<<< HEAD
        return (await http.get(uri)).data.language.harvests[0].metadata;
=======
>>>>>>> implement-language-browser
    }
}
