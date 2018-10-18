<template>
    <div>
        <div class="row my-2">
            <div class="col">
                <language-list-table-component />
                <p v-if="!country">Please select a country from the dropdown.</p>
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
    },
    computed: {
        ...mapState({
            country: state => state.explorerStore.selected.country
        })
    }
};
</script>

<style lang="scss" scoped>
</style>
