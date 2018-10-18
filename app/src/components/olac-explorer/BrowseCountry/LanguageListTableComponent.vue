<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Resource Counts for {{country}}</span>
            </div>
            <el-table :data="stats" style="width: 100%" v-if="stats">
                <el-table-column prop="name" label="Name" width="150" fixed>
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
import { compact, orderBy } from "lodash";

export default {
    data() {
        return {
            resourceTypes: []
        };
    },
    computed: {
        country: function() {
            return this.$store.state.explorerStore.selected.country;
        },
        stats: function() {
            let languageData = this.$store.state.explorerStore.selected
                .languageData;
            const meta = this.$store.state.explorerStore.selected
                .languageMetadata;

            if (languageData) {
                this.resourceTypes = extractResourceTypes(languageData);
                let stats = tabulateStats({
                    data: languageData,
                    resourceTypes: this.resourceTypes
                });
                stats = stats.map(s => {
                    let language = meta.filter(l => l.code === s.code)[0];
                    if (language) s.name = language.name;
                    return s;
                });
                return orderBy(stats, "name");
            }
        }
    }
};

function extractResourceTypes(data) {
    let types = {};
    data.languages.forEach(language => {
        language.stats.forEach(type => {
            let key = Object.keys(type)[0];
            types[key] = "";
        });
    });
    return Object.keys(types).sort();
}

function tabulateStats({ data, resourceTypes }) {
    return data.languages.map(language => {
        let stats = {};
        stats.code = language.code;
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

