<template>
    <div>
        <div class="row">
            <div class="col">
                <controls-component></controls-component>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p
                    v-if="!selectedLanguage"
                >Please select a language. Start typing to see a list of choices.</p>
            </div>
        </div>
        <div class="row">
            <div class="col my-2">
                <el-card class="box-card" v-if="selectedLanguage">
                    <div slot="header" class="clearfix">
                        <span>{{metadata.name}}</span>
                    </div>
                    <div class="row">
                        <div class="col" v-if="metadata.url">
                            <a
                                :href="metadata.url"
                                target="_blank"
                            >View this item at the Open Language Archives Community site</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" v-if="metadata.url">
                            <a
                                :href="glottologUrl"
                                target="_blank"
                            >View this item at the Glottolog site</a>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="row">
            <div class="col my-2">
                <language-resource-chart-component v-if="selectedLanguage"/>
            </div>
        </div>
        <div class="row">
            <div class="col my-2">
                <language-resource-table-component v-if="selectedLanguage"/>
            </div>
        </div>
    </div>
</template>

<script>
import ControlsComponent from "./ControlsComponent.vue";
import LanguageResourceChartComponent from "./LanguageResourceChartComponent.vue";
import LanguageResourceTableComponent from "./LanguageResourceTableComponent.vue";

export default {
    components: {
        ControlsComponent,
        LanguageResourceTableComponent,
        LanguageResourceChartComponent
    },
    data() {
        return {
            metadata: {}
        };
    },
    computed: {
        percentage: function() {
            const percentage = this.$store.state.explorerStore.loading;
            if (percentage < 100) {
                this.metadata = {};
            }
            return percentage;
        },
        data: function() {
            let harvests = this.$store.state.explorerStore.browseByLanguage
                .harvests;
            this.metadata = harvests[harvests.length - 1] || {};
            return harvests;
        },
        glottologUrl: function() {
            return `https://glottolog.org/resource/languoid/id/${
                this.metadata.glotto_id
            }`;
        },
        selectedLanguage: function() {
            return this.$store.state.explorerStore.browseByLanguage.code;
        }
    },
    mounted() {
        if (this.$route.params.language) {
            this.$store.commit(
                "explorerStore/saveSelectedLanguageCode",
                this.$route.params.language
            );
            this.$store.dispatch("explorerStore/getLanguageData");
        } else {
            this.$store.commit("explorerStore/resetLanguageState");
        }
    },
    watch: {
        data: () => {},
        percentage: () => {}
    }
};
</script>

<style lang="scss" scoped>
</style>
