<template>
    <div>
        <div class="row">
            <div class="col">
                <olac-explorer-controls-component></olac-explorer-controls-component>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <olac-explorer-language-list-component></olac-explorer-language-list-component>
            </div>
        </div>
    </div>
</template>

<script>
import OlacExplorerControlsComponent from "./OlacExplorerControlsComponent.vue";
import OlacExplorerLanguageListComponent from "./OlacExplorerLanguageListComponent.vue";

export default {
    components: {
        OlacExplorerControlsComponent,
        OlacExplorerLanguageListComponent
    },
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("explorerStore/preload");
    }
};
</script>

<style lang="scss" scoped>
</style>
