<template>
    <div>
        <el-card class="box-card">
            <div class="row">
                <div class="col">
                    <el-select
                        v-model="selectedDate"
                        placeholder="Select a date"
                        @change="loadTabData"
                    >
                        <el-option v-for="date in dates" :key="date" :label="date" :value="date"></el-option>
                    </el-select>
                </div>
                <div class="col">
                    <el-input placeholder="Filter resources" v-model="filter" @change="loadTabData"></el-input>
                </div>
                <div class="col">
                    <el-pagination
                        class="float-right"
                        layout="sizes, prev, pager, next"
                        :page-sizes="[5, 10, 20, 50]"
                        :page-size="5"
                        :total="totalResources"
                        @size-change="changePageSize"
                        @current-change="changePage"
                    ></el-pagination>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <el-tabs v-model="activeIndex" @tab-click="loadTabData">
                        <el-tab-pane v-for="type of resourceTypes" :key="type" :label="type">
                            <el-table :data="resources" style="width: 100%" height="500">
                                <el-table-column prop="name" label="ID" width="250">
                                    <template slot-scope="scope">
                                        <a :href="scope.row.url" target="_blank">{{scope.row.name}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="text" label="Text">
                                    <template slot-scope="scope">
                                        <span v-html="scope.row.text"></span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import { flattenDeep, uniq, compact } from "lodash";
export default {
    data() {
        return {
            selectedDate: undefined,
            filter: undefined,
            activeIndex: 0,
            resources: [],
            totalResources: undefined,
            showPagination: false,
            page: 0,
            pageSize: 5
        };
    },
    computed: {
        percentage: function() {
            let percentage = this.$store.state.explorerStore.loading;
            if (percentage === 100) this.loadTabData();
            return percentage;
        },
        dates: function() {
            let dates = this.$store.state.explorerStore.dates;
            this.selectedDate = dates[dates.length - 1];
            return dates;
        },
        data: function() {
            return this.$store.state.explorerStore.browseByLanguage.harvests;
        },
        resourceTypes: function() {
            const store = this.$store.state.explorerStore;
            let types = store.browseByLanguage.harvests.map(harvest => {
                if (harvest.resources) return Object.keys(harvest.resources);
            });
            return uniq(flattenDeep(types)).sort();
        }
    },
    watch: {
        percentage: () => {}
    },
    methods: {
        loadTabData() {
            let harvest = this.data.filter(
                harvest => harvest.date === this.selectedDate
            )[0];
            try {
                let resources =
                    harvest.resources[this.resourceTypes[this.activeIndex]]
                        .resources;
                const re = new RegExp(this.filter, "gi");
                resources = resources.map(resource => {
                    if (re.exec(resource.text)) return resource;
                });
                resources = compact(resources);
                this.totalResources = resources.length;
                this.showPagination = resources.length > this.pageSize;
                if (resources.length < this.pageSize) {
                    this.resources = resources;
                } else {
                    this.resources = resources.slice(
                        this.page * this.pageSize,
                        (this.page + 1) * this.pageSize
                    );
                }
            } catch (error) {}
        },
        changePage(page) {
            this.page = page - 1;
            this.loadTabData();
        },
        changePageSize(size) {
            this.pageSize = size;
            this.loadTabData();
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
