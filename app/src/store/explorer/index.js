import ExplorerService from "services/explorer.service";
const explorerService = new ExplorerService();
import { round, groupBy, uniqBy } from "lodash";

export const explorerStoreModule = {
    namespaced: true,
    state: {
        dates: [],
        regions: [],
        countries: [],
        languages: [],
        languagesGroupedByCode: {},
        loading: 0,
        preload: undefined,
        browseByCountry: {
            country: undefined,
            date: undefined,
            languages: undefined,
            filters: {}
        },
        browseByLanguage: {
            code: undefined,
            harvests: []
        }
    },
    mutations: {
        saveDates(state, dates) {
            state.dates = [...dates];
        },
        saveRegions(state, regions) {
            state.regions = [...regions];
        },
        saveCountries(state, countries) {
            state.countries = [...countries];
        },
        saveLanguages(state, languages) {
            state.languages = languages.map(language => {
                return {
                    ...language,
                    metadata: false,
                    resources: false
                };
            });
            state.languagesGroupedByCode = groupBy(state.languages, "code");
        },
        saveSelectedCountry(state, country) {
            state.browseByCountry.country = country;
        },
        saveSelectedDateCountry(state, date) {
            state.browseByCountry.date = date;
        },
        savePreloadMessage(state, msg) {
            state.preload = msg;
        },

        saveCountryLanguageData(state, languages) {
            state.browseByCountry.languages = [...languages];
            state.languages = state.languages.map(language => {
                return {
                    ...language,
                    ...languages.filter(l => l.code === language.code)[0]
                };
            });
            state.languagesGroupedByCode = groupBy(state.languages, "code");
        },
        saveLoadingPercentage(state, percentage) {
            state.loading = percentage;
        },
        saveCountryFilters(state, data) {
            state.browseByCountry.filters = { ...data };
        },

        saveSelectedLanguageCode(state, code) {
            state.browseByLanguage.code = code;
        },
        saveSelectedDateLanguage(state, date) {
            state.browseByLanguage.date = date;
        },
        saveLanguageData(state, data) {
            state.browseByLanguage.harvests = [...data];
        },
        resetLanguageState(state) {
            state.browseByLanguage = {
                code: undefined,
                harvests: []
            };
        },
        resetCountryState(state) {
            state.browseByCountry = {
                country: undefined,
                date: undefined,
                languages: undefined,
                filters: {}
            };
        }
    },
    actions: {
        async preload({ commit }) {
            commit("savePreloadMessage", "loading harvest dates...");
            const dates = await explorerService.getDates();
            commit("saveDates", dates);
            await sleep(800);

            commit("savePreloadMessage", "loading regions...");
            const regions = await explorerService.getRegions();
            commit("saveRegions", regions);
            await sleep(800);

            commit("savePreloadMessage", "loading countries...");
            const countries = await explorerService.getCountries();
            commit("saveCountries", countries);
            await sleep(800);

            commit("savePreloadMessage", "loading languages...");
            const languages = await explorerService.getLanguages();
            commit("saveLanguages", languages);
            await sleep(800);

            commit("savePreloadMessage", "done");
        },

        async getCountryData({ commit, state }) {
            const languagesGroupedByCode = state.languagesGroupedByCode;

            commit("saveLoadingPercentage", 1);
            const data = await explorerService.getCountryData({
                country: state.browseByCountry.country,
                date: state.browseByCountry.date
            });
            commit("saveSelectedDateCountry", data.date);

            const nLanguages = data.languages.length;
            let i = 0;
            let languages = [];
            for (let language of data.languages) {
                i += 1;
                if (
                    !languagesGroupedByCode[language.code][0].metadata ||
                    languagesGroupedByCode[language.code][0].date !==
                        state.browseByCountry.date
                ) {
                    let metadata = await explorerService.getLanguageData({
                        code: language.code,
                        date: state.browseByCountry.date
                    });
                    languages.push({
                        ...language,
                        date: metadata.date,
                        metadata: true,
                        ...metadata
                    });
                } else {
                    languages.push({
                        ...languagesGroupedByCode[language.code][0]
                    });
                }
                await sleep(100);
                commit("saveLoadingPercentage", round((i / nLanguages) * 100));
            }
            commit("saveCountryLanguageData", languages);
        },
        async getLanguageData({ commit, state }) {
            commit("saveLoadingPercentage", 1);
            let metadata, resources;
            let data = [];
            const nLoads = state.dates.length;
            let i = 0;
            for (let date of state.dates) {
                i += 1;
                metadata = {};
                resources = {};
                try {
                    metadata = await explorerService.getLanguageData({
                        code: state.browseByLanguage.code,
                        date: date
                    });
                } catch (error) {}

                try {
                    resources = await explorerService.getLanguageResources({
                        code: state.browseByLanguage.code,
                        date: date
                    });
                } catch (error) {}
                data.push({ ...metadata, resources });
                await sleep(100);
                commit("saveLoadingPercentage", round((i / nLoads) * 100));
            }
            commit("saveLanguageData", data);
        }
    }
};

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
