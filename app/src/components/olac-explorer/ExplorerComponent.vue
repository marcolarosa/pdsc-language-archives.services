<template>
    <div class="row">
        <div class="col">
            <explorer-menu-component />
        </div>
        <div class="col-10 p-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ExplorerMenuComponent from "./ExplorerMenuComponent.vue";

export default {
    components: {
        ExplorerMenuComponent
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
