<template>
    <div>
        <div class="row my-2">
            <div class="col">
                <olac-explorer-language-list-table-component />
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <olac-explorer-language-list-chart-component />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { compact } from "lodash";
import ApexCharts from "apexcharts";
import OlacExplorerLanguageListTableComponent from "./OlacExplorerLanguageListTableComponent.vue";
import OlacExplorerLanguageListChartComponent from "./OlacExplorerLanguageListChartComponent.vue";

export default {
    components: {
        OlacExplorerLanguageListTableComponent,
        OlacExplorerLanguageListChartComponent
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
</style>
