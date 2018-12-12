<template>
    <div>
        <el-card class="box-card" v-if="country">
            <div ref="chart"></div>
        </el-card>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { compact, cloneDeep, orderBy, includes, isEmpty } from "lodash";
import ApexCharts from "apexcharts";

export default {
    data() {
        return {
            chart: undefined,
            options: {
                chart: {
                    height: 350,
                    type: "bar",
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                legend: {
                    onItemClick: {
                        toggleDataSeries: false
                    }
                },
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
                    text: "Resource counts per language",
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
        country: function() {
            return this.$store.state.explorerStore.browseByCountry.country;
        },
        stats: function() {
            this.renderChart();
        }
    },
    watch: {
        stats: {}
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            if (this.percentage === 1) {
                try {
                    this.chart.updateSeries([{ data: [] }]);
                } catch (error) {}
            }
            if (this.percentage !== 100) return;
            const store = this.$store.state.explorerStore;
            const languages = store.browseByCountry.languages;
            let options = cloneDeep(this.options);
            if (languages) {
                let resourceTypes = extractResourceTypes(languages);
                options.xaxis.categories = resourceTypes;
                options.series = prepareSeries({
                    data: languages,
                    resourceTypes
                });

                const filters = store.browseByCountry.filters;
                options.series = options.series.map(language => {
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
                options.series = compact(options.series);

                if (isEmpty(options.series)) options.series = [{ data: [] }];
                if (this.chart) {
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
    let types = {};
    data.forEach(language => {
        language.stats.forEach(type => {
            let key = Object.keys(type)[0];
            types[key] = "";
        });
    });
    return Object.keys(types).sort();
}

function prepareSeries({ data, resourceTypes }) {
    return data.map(language => {
        let stats = {
            name: language.name,
            code: language.code,
            data: []
        };
        resourceTypes.forEach(type => {
            let value = compact(language.stats.map(s => s[type]))[0] || 0;
            stats.data.push(value);
        });
        return stats;
    });
}
</script>

<style lang="scss" scoped>
</style>
