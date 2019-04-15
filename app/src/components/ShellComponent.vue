<template>
    <div>
        <site-header-component></site-header-component>
        <router-view></router-view>
    </div>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent.vue";

export default {
    data() {
        return {};
    },
    components: {
        SiteHeaderComponent
    }
};
</script>

<style lang="scss" scoped>
</style>
