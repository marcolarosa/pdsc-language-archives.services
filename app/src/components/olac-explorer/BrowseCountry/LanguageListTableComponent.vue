<template>
    <div>
        <el-card class="box-card" v-if="country">
            <div slot="header" class="clearfix">
                <span>Resource Counts for {{country}}</span>
            </div>
            <el-table :data="stats" style="width: 100%" height="250" v-if="stats">
                <el-table-column prop="name" label="Name" width="150" fixed>
                    <template slot-scope="scope">
                        <router-link :to="getLanguageBrowseLink(scope.row.code)">{{scope.row.name}}</router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="code" label="Code" width="100" fixed>
                </el-table-column>
                <span v-for="type of resourceTypes" :key="type">
                    <el-table-column :prop="type" :label="type" min-width="150">
                    </el-table-column>
                </span>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import { compact, orderBy, includes, isEmpty } from "lodash";

export default {
    data() {
        return {
            resourceTypes: []
        };
    },
    computed: {
        percentage: function() {
            return this.$store.state.explorerStore.loading;
        },
        country: function() {
            return this.$store.state.explorerStore.browseByCountry.country;
        },
        stats: function() {
            let store = this.$store.state.explorerStore;
            if (this.percentage !== 100) return;
            let languages = store.browseByCountry.languages;
            const filters = store.browseByCountry.filters;

            if (languages) {
                this.resourceTypes = extractResourceTypes(languages);
                let stats = tabulateStats({
                    data: languages,
                    resourceTypes: this.resourceTypes
                });
                stats = stats.map(language => {
                    if (isEmpty(filters.languages)) {
                        return language;
                    } else {
                        if (
                            filters.action === "show" &&
                            includes(filters.languages, language.code)
                        ) {
                            return language;
                        } else if (
                            filters.action === "hide" &&
                            !includes(filters.languages, language.code)
                        ) {
                            return language;
                        }
                    }
                });
                return orderBy(compact(stats), "name");
            }
        }
    },
    methods: {
        getLanguageBrowseLink(code) {
            return `/olac-explorer/browse-language/${code}`;
        }
    }
};

function extractResourceTypes(data) {
    let types = {};
    data.forEach(language => {
        language.stats.forEach(type => {
            let key = Object.keys(type)[0];
            types[key] = "";
        });
    });
    return Object.keys(types).sort();
}

function tabulateStats({ data, resourceTypes }) {
    return data.map(language => {
        let stats = {};
        stats.code = language.code;
        stats.name = language.name;
        resourceTypes.forEach(type => {
            let value = {};
            value[type] = compact(language.stats.map(s => s[type]))[0] || 0;
            stats = { ...stats, ...value };
        });
        return stats;
    });
}
</script>

<style lang="scss" scoped>
</style>

<style lang="css">
.el-table th > .cell {
    white-space: nowrap;
}
.el-table th > .cell:hover {
    white-space: normal;
    word-wrap: normal;
}
</style>

