import ExplorerService from "services/explorer.service";
const explorerService = new ExplorerService();

export const explorerStoreModule = {
    namespaced: true,
    state: {
        dates: [],
        regions: [],
        countries: [],
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
                ...[metadata]
            ];
            // console.log(
            //     JSON.stringify(state.selected.languageMetadata, null, 2)
            // );

            // state.selected.languageData.languages = state.selected.languageData.languages.map(
            //     language => {
            //         if (language.code === metadata.code) {
            //             language = { ...language, ...metadata };
            //         }
            //         return language;
            //     }
            // );
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
            const data = await explorerService.getCountryData(
                state.selected.country
            );
            commit("saveCountryData", data);

            data.languages.forEach(async language => {
                let metadata = await explorerService.getLanguageData({
                    code: language.code
                });
                commit("saveLanguageMetadata", metadata);
            });
        }
    }
};
