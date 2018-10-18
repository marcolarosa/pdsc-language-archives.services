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
        return {
            selectedCountry: undefined,
            selectedDate: undefined
        };
    },
    computed: {
        ...mapState({
            dates: state => state.explorerStore.dates,
            countries: state => state.explorerStore.countries
        })
    },
    methods: {
        saveSelectedCountry() {
            this.$store.commit(
                "explorerStore/saveSelectedCountry",
                this.selectedCountry
            );
            this.loadCountryData();
        },
        saveSelectedDate() {
            this.$store.commit(
                "explorerStore/saveSelectedDate",
                this.selectedDate
            );
            this.loadCountryData();
        },
        loadCountryData() {
            this.$store.dispatch("explorerStore/getCountryData", {
                country: this.selectedCountry
            });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
