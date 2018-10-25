<template>
    <div>
        <div class="row">
            <div class="col">
                <controls-component></controls-component>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <language-list-component></language-list-component>
            </div>
        </div>
    </div>
</template>

<script>
import ControlsComponent from "./ControlsComponent.vue";
import LanguageListComponent from "./LanguageListComponent.vue";

export default {
    components: {
        ControlsComponent,
        LanguageListComponent
    },
    data() {
        return {};
    },
    mounted() {
        if (!this.$route.params.country) {
            this.$store.commit("explorerStore/resetCountryState");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>