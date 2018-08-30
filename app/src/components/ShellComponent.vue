<template>
    <div>
        <div class="container">
            <site-header-component></site-header-component>
            <router-view></router-view>
        </div>
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
