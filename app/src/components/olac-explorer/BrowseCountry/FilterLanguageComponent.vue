<template>
    <div>
        <div class="row">
            <div class="col-4">
                <el-select v-model="action" @change="handleSelection" class="style-select">
                    <el-option key="show" label="Show only these languages" value="show"></el-option>
                    <el-option key="hide" label="Hide these languages" value="hide"></el-option>
                </el-select>
            </div>
            <div class="col">
                <el-select v-model="selectedLanguages" multiple class="style-select" @change="handleSelection">
                    <el-option v-for="language of languages" :key="language.code" :label="language.name" :value="language.code">
                        <span style="float: left">{{language.name}}</span>
                        <span style="float: right; padding-right: 40px; color: #8492a6; font-size: 13px">{{ language.code}}</span>
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>

<script>
import { groupBy, orderBy } from "lodash";

export default {
    data() {
        return {
            action: "show",
            selectedLanguages: [],
            inputVisible: false,
            inputValue: ""
        };
    },
    computed: {
        percentage: function() {
            return this.$store.state.explorerStore.loading;
        },
        languages: function() {
            if (this.percentage !== 100) return;
            let store = this.$store.state.explorerStore;
            let languages = store.browseByCountry.languages;
            return orderBy(languages, "name");
        }
    },
    methods: {
        handleSelection() {
            setTimeout(() => {
                this.$store.commit("explorerStore/saveCountryFilters", {
                    action: this.action,
                    languages: this.selectedLanguages
                });
            }, 200);
        }
    }
};
</script>

<style lang="scss" scoped>
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
.style-select {
    width: 100%;
}
</style>
