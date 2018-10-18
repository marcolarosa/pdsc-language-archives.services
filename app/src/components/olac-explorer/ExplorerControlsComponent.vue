<template>
    <div>
        <el-select v-model="selectedCountry" placeholder="Select a country" @change="saveSelectedCountry">
            <el-option v-for="country in countries" :key="country" :label="country" :value="country">
            </el-option>
        </el-select>
        <el-select v-model="selectedDate" placeholder="Select a date" @change="saveSelectedDate">
            <el-option v-for="date in dates" :key="date" :label="date" :value="date">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        selectedDate: {
            get: function() {
                const store = this.$store.state.explorerStore;
                if (store.selected.date) return store.selected.date;
                let dates = store.dates;
                return dates[dates.length - 1];
            },
            set: function(date) {
                this.saveSelectedDate(date);
            }
        },
        selectedCountry: {
            get: function() {
                const store = this.$store.state.explorerStore;
                if (store.selected.country) return store.selected.country;
            },
            set: function(country) {
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
