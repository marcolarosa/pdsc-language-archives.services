<template>
    <div>
        <div class="row">
            <div class="col-4">
                <el-select
                    v-model="selectedLanguage"
                    class="style-select"
                    placeholder="Select a language"
                    clearable
                    filterable
                    remote
                    reserve-keyword
                    :remote-method="lookupLanguage"
                    @change="saveSelectedLanguage"
                    :disabled="languages.length === 0"
                >
                    <el-option
                        v-for="language in languageMatches"
                        :key="language.code"
                        :label="language.name"
                        :value="language.code"
                    ></el-option>
                </el-select>
            </div>
            <div class="col-4">
                <el-progress
                    :text-inside="true"
                    :stroke-width="18"
                    :percentage="percentage"
                    status="success"
                    v-if="percentage"
                ></el-progress>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { compact, isEmpty } from "lodash";

export default {
    data() {
        return {
            languageMatches: []
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
        selectedLanguage: {
            get: function() {
                const store = this.$store.state.explorerStore;
                if (store.browseByLanguage.code) {
                    const code = store.browseByLanguage.code;
                    if (
                        isEmpty(this.languageMatches) ||
                        this.languageMatches[0].code !== code
                    ) {
                        this.languageMatches = this.languages.filter(
                            language => language.code === code
                        );
                    }
                    return code;
                }
            },
            set: function(code) {
                this.$router.push({
                    path: `/olac-explorer/browse-language/${code}`
                });
            }
        },
        languages: function() {
            return this.$store.state.explorerStore.languages;
        },
        dates: function() {
            return this.$store.state.explorerStore.dates;
        }
    },
    methods: {
        lookupLanguage(text) {
            const re = new RegExp(text, "gi");
            let list = this.languages.map(language => {
                if (re.exec(language.name)) return language;
            });
            this.languageMatches = compact(list);
        },
        saveSelectedLanguage(code) {
            this.$store.commit("explorerStore/saveSelectedLanguageCode", code);
            this.loadLanguageData();
        },
        loadLanguageData() {
            if (!this.selectedLanguage) return;
            this.$store.dispatch("explorerStore/getLanguageData");
        }
    }
};
</script>

<style lang="scss" scoped>
.style-select {
    width: 100%;
}
</style>
