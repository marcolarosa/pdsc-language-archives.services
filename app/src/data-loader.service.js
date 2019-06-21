"use strict";

import { http } from "./http.service";

export default class ExplorerService {
    constructor() {}

    async getDates() {
        let uri = `/dates`;
        return (await this.get(uri)).dates;
    }

    async getRegions() {
        let uri = `/regions`;
        return (await this.get(uri)).regions;
    }

    async getCountries() {
        let uri = `/countries`;
        return (await this.get(uri)).countries;
    }

    async getLanguages(date) {
        let uri;
        if (!date) {
            uri = `/languages`;
        } else {
            uri = `/languages?date=${date}`;
        }
        return (await this.get(uri)).languages;
    }

    async getCountryData({ country, date }) {
        let uri;
        if (!date) {
            uri = `/countries/${country}/stats`;
        } else {
            uri = `/countries/${country}/stats?date=${date}`;
        }
        return await this.get(uri);
    }

    async getLanguageData({ code, date }) {
        let uri = `/languages/${code}?date=${date}`;
        try {
            let data = await this.get(uri);
            return data.language.harvests[0].metadata;
        } catch (error) {
            return {};
        }
    }

    async getLanguageResources({ code, date }) {
        let uri = `/languages/${code}/resources?date=${date}`;
        try {
            let data = await this.get(uri);
            return data.language.resources;
        } catch (error) {
            return {};
        }
    }

    async get(uri) {
        let response = await fetch(
            `http://language-archives.services/api${uri}`
        );
        if (response.status !== 200) {
            throw new Error(response);
        }
        return await response.json();
    }
}
