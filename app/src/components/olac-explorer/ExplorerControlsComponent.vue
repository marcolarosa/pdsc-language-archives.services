<template>
    <div>
        <div class="row">
            <div class="col-4">
                <el-select v-model="selectedCountry" placeholder="Select a country" filterable @change="saveSelectedCountry">
                    <el-option v-for="country in countries" :key="country" :label="country" :value="country">
                    </el-option>
                </el-select>
            </div>
            <div class="col-4">
                <el-select v-model="selectedDate" placeholder="Select a date" @change="saveSelectedDate">
                    <el-option v-for="date in dates" :key="date" :label="date" :value="date">
                    </el-option>
                </el-select>
            </div>
            <div class="col-4">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="success" v-if="percentage"></el-progress>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        percentage: function() {
            let loading = this.$store.state.explorerStore.loading;
            if (loading === 0 || loading === 100) {
                return undefined;
            } else {
                return loading;
            }
        },
        selectedDate: {
            get: function() {
                const store = this.$store.state.explorerStore;
                if (store.browseByCountry.date)
                    return store.browseByCountry.date;
                let dates = store.dates;
                const date = dates[dates.length - 1];
                this.saveSelectedDate(date);
                return date;
            },
            set: function(date) {
                this.saveSelectedDate(date);
            }
        },
        selectedCountry: {
            get: function() {
                const store = this.$store.state.explorerStore;
                if (store.browseByCountry.country)
                    return store.browseByCountry.country;
            },
            set: function(country) {
                this.$router.push({
                    path: `/olac-explorer/browse-country/${country}`
                });
                this.saveSelectedCountry(country);
            }
        },
        countries: function() {
            return this.$store.state.explorerStore.countries;
        },
        dates: function() {
            return this.$store.state.explorerStore.dates;
        }
    },
    mounted() {
        if (this.$route.params.country)
            this.saveSelectedCountry(this.$route.params.country);
    },
    methods: {
        saveSelectedCountry(country) {
            this.$store.commit("explorerStore/saveSelectedCountry", country);
            this.loadCountryData();
        },
        saveSelectedDate(date) {
            this.$store.commit("explorerStore/saveSelectedDate", date);
            this.loadCountryData();
        },
        loadCountryData() {
            if (!this.selectedCountry) return;
            this.$store.dispatch("explorerStore/getCountryData");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
