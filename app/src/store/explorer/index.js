import ExplorerService from "services/explorer.service";
const explorerService = new ExplorerService();
import { round, groupBy } from "lodash";

export const explorerStoreModule = {
    namespaced: true,
    state: {
        dates: [],
        regions: [],
        countries: [],
        loading: 0,
        selected: {
            country: undefined,
            date: undefined,
            languageData: undefined,
            languageMetadata: []
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
            state.selected.country = country;
        },
        saveSelectedDate(state, date) {
            state.selected.date = date;
        },
        saveCountryData(state, data) {
            state.selected.languageData = { ...data };
        },
        saveLanguageMetadata(state, metadata) {
            state.selected.languageMetadata = [
                ...state.selected.languageMetadata,
                ...metadata
            ];
        },
        saveLoadingPercentage(state, percentage) {
            state.loading = percentage;
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
                country: state.selected.country,
                date: state.selected.date
            });
            commit("saveCountryData", data);

            const languages = groupBy(state.selected.languageMetadata, "code");
            const nLanguages = data.languages.length;
            let i = 0;
            let languageMetadata = [];
            for (let language of data.languages) {
                i += 1;
                if (!languages[language.code]) {
                    let metadata = await explorerService.getLanguageData({
                        code: language.code,
                        date: state.selected.date
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
