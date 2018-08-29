<template>
    <div>
        <div class="container-fluid">
            <site-header-component></site-header-component>
            <site-overview-component></site-overview-component>
        </div>
    </div>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent.vue";
import SiteOverviewComponent from "./SiteOverviewComponent.vue";
export default {
    data() {
        return {};
    },
    components: {
        SiteHeaderComponent,
        SiteOverviewComponent
    }
};
</script>

<style lang="scss" scoped>
</style>
