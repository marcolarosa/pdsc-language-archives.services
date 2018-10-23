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
        browseByCountry: {
            country: undefined,
            date: undefined,
            languageData: undefined,
            filters: {}
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
        saveSelectedCountry(state, country) {
            state.browseByCountry.country = country;
        },
        saveSelectedDate(state, date) {
            state.browseByCountry.date = date;
        },
        saveCountryData(state, data) {
            state.browseByCountry.languageData = { ...data };
        },
        saveLanguageMetadata(state, metadata) {
            state.languages = uniqBy([...state.languages, ...metadata], "code");
            state.languagesGroupedByCode = groupBy(state.languages, "code");
        },
        saveLoadingPercentage(state, percentage) {
            state.loading = percentage;
        },
        saveFilters(state, data) {
            state.browseByCountry.filters = { ...data };
        }
    },
    actions: {
        async preload({ commit }) {
            const dates = await explorerService.getDates();
            commit("saveDates", dates);

            const regions = await explorerService.getRegions();
            commit("saveRegions", regions);

            const countries = await explorerService.getCountries();
            commit("saveCountries", countries);
        },
        async getCountryData({ commit, state }) {
            commit("saveLoadingPercentage", 1);
            const data = await explorerService.getCountryData({
                country: state.browseByCountry.country,
                date: state.browseByCountry.date
            });
            commit("saveCountryData", data);

            const languagesGroupedByCode = state.languagesGroupedByCode;
            const nLanguages = data.languages.length;
            let i = 0;
            let languageMetadata = [];
            for (let language of data.languages) {
                i += 1;
                if (!languagesGroupedByCode[language.code]) {
                    let metadata = await explorerService.getLanguageData({
                        code: language.code,
                        date: state.browseByCountry.date
                    });
                    languageMetadata.push(metadata);
                    await sleep(100);
                }
                commit("saveLoadingPercentage", round((i / nLanguages) * 100));
            }
            commit("saveLanguageMetadata", languageMetadata);
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
