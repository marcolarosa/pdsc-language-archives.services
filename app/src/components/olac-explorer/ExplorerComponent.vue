<template>
    <div class="row">
        <div class="style-menu">
            <explorer-menu-component />
        </div>
        <div class="style-container p-3">
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
.style-menu {
    position: fixed;
    left: 0;
}
.style-container {
    position: relative;
    left: 250px;
    min-width: 1000px;
    overflow: auto;
}
</style>
