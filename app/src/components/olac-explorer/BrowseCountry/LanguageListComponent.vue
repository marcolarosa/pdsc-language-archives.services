<template>
    <div>
        <div class="row my-2">
            <div class="col">
                <language-list-table-component />
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <language-list-chart-component />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { compact } from "lodash";
import ApexCharts from "apexcharts";
import LanguageListTableComponent from "./LanguageListTableComponent.vue";
import LanguageListChartComponent from "./LanguageListChartComponent.vue";

export default {
    components: {
        LanguageListTableComponent,
        LanguageListChartComponent
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
</style>
