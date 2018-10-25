<template>
    <div>
        <el-card class="box-card">
            <div ref="chart"></div>
        </el-card>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { format } from "date-fns";
import {
    compact,
    cloneDeep,
    orderBy,
    includes,
    isEmpty,
    flattenDeep,
    uniq
} from "lodash";
import ApexCharts from "apexcharts";

export default {
    data() {
        return {
            chart: undefined,
            options: {
                chart: {
                    height: 350,
                    type: "line",
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                legend: {},
                responsive: [
                    {
                        breakpoint: 700,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }
                ],
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    type: "string"
                },
                title: {
                    text: "Data type resource counts over time",
                    align: "center"
                },
                fill: {
                    opacity: 1
                }
            }
        };
    },
    computed: {
        percentage: function() {
            return this.$store.state.explorerStore.loading;
        },
        dates: function() {
            return this.$store.state.explorerStore.dates;
        },
        data: function() {
            this.renderChart();
        }
    },
    watch: {
        data: {}
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            if (this.percentage === 1 && this.chart) {
                this.chart.updateSeries([{ data: [] }]);
                return;
            }
            if (this.percentage !== 100) return;
            const store = this.$store.state.explorerStore;
            const harvests = store.browseByLanguage.harvests;
            let options = cloneDeep(this.options);
            if (harvests) {
                let resourceTypes = extractResourceTypes(harvests);
                options.xaxis.categories = this.dates.map(d =>
                    format(d, "Do MMM YYYY")
                );
                options.series = prepareSeries({
                    data: harvests,
                    resourceTypes
                });
                if (this.chart) {
                    if (isEmpty(options.series))
                        options.series = [{ data: [] }];
                    options.series = orderBy(options.series, "name");
                    this.chart.updateSeries(options.series);
                } else {
                    if (this.$refs["chart"]) {
                        this.chart = new ApexCharts(
                            this.$refs["chart"],
                            options
                        );
                        this.chart.render();
                    }
                }
            }
        }
    }
};

function extractResourceTypes(data) {
    let types = [];
    data.forEach(language => {
        if (language.resources) types.push(Object.keys(language.resources));
    });
    return uniq(flattenDeep(types)).sort();
}

function prepareSeries({ data, resourceTypes }) {
    let series = [];
    for (let type of resourceTypes) {
        series.push({
            name: type,
            data: data.map(language => {
                if (language.resources && language.resources[type]) {
                    return language.resources[type].count;
                } else {
                    return 0;
                }
            })
        });
    }
    return series;
}
</script>

<style lang="scss" scoped>
</style>
