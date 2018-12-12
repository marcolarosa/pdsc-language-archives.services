<template>
    <el-menu mode="vertical" :router="true" class="style-menu">
        <div class="row">
            <div class="col text-center py-2">
                <router-link to="/">
                    <img src="assets/images/coedl-logo.png" class="style-logo">
                </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col text-center py-2">Language Archives
                <br>Explorer
            </div>
        </div>
        <hr>
        <el-menu-item
            index="1"
            route="/olac-explorer/explore-country"
            :class="{'is-active': activePath.exploreCountry }"
        >
            <span>Explore Country</span>
        </el-menu-item>
        <el-menu-item
            index="2"
            route="/olac-explorer/browse-country"
            :class="{'is-active': activePath.browseCountry }"
        >
            <span>Browse Country Data</span>
        </el-menu-item>
        <el-menu-item
            index="3"
            route="/olac-explorer/browse-language"
            :class="{'is-active': activePath.browseLanguage }"
        >
            <span>Browse Language Data</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activePath: {
                exploreCountry: undefined,
                browseCountry: undefined,
                browseLanguage: undefined
            }
        };
    },
    mounted() {
        this.setActivePath();
    },
    watch: {
        "$route.path": function() {
            this.setActivePath();
        }
    },
    methods: {
        setActivePath() {
            this.activePath.exploreCountry = this.$route.path.match(
                "/olac-explorer/explore-country"
            )
                ? true
                : false;
            this.activePath.browseCountry = this.$route.path.match(
                "/olac-explorer/browse-country"
            )
                ? true
                : false;
            this.activePath.browseLanguage = this.$route.path.match(
                "/olac-explorer/browse-language"
            )
                ? true
                : false;
        }
    }
};
</script>

<style lang="scss" scoped>
.style-menu {
    height: 100vh;
    min-width: 250px;
}

.style-logo {
    width: 200px;
}
</style>
