<template>
    <div ref="top" class="px-lg-5">
        <site-header-component></site-header-component>
        <router-view></router-view>
    </div>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent.vue";
import VueScrollTo from "vue-scrollto";

export default {
    data() {
        return {};
    },
    components: {
        SiteHeaderComponent
    },
    watch: {
        $route: function() {
            VueScrollTo.scrollTo(this.$refs["top"], 100, {});
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
