<template>
    <div class="style-container">
        <div class="style-menu">
            <explorer-menu-component/>
        </div>
        <div class="style-content p-3">
            <router-view v-if="loadRouterView"></router-view>
        </div>
    </div>
</template>

<script>
import ExplorerMenuComponent from "./ExplorerMenuComponent.vue";
import { includes } from "lodash";

export default {
    components: {
        ExplorerMenuComponent
    },
    data() {
        return {
            notification: undefined,
            loadRouterView: false
        };
    },
    computed: {
        preload: function() {
            let message = this.$store.state.explorerStore.preload;
            if (this.notification) this.notification.close();
            this.notification = this.$notify({
                title: message,
                type: "info",
                position: "top-right",
                showClose: false
            });
            if (message === "done") {
                setTimeout(() => {
                    this.notification.close();
                    this.loadRouterView = true;
                }, 1000);
            }
            return message;
        }
    },
    watch: {
        preload: () => {}
    },
    created() {
        (async () => {
            await this.$store.dispatch("explorerStore/preload");
            // if (
            //     (includes[("browseCountry", "browseCountrySelection")],
            //     this.$route.name)
            // ) {
            //     if (this.$route.params.country) {
            //         this.$store.commit(
            //             "explorerStore/saveSelectedCountry",
            //             this.$route.params.country
            //         );
            //         this.$store.dispatch("explorerStore/getCountryData");
            //     }
            // }

            // if (
            //     (includes[("browseLanguage", "browseLanguageSelection")],
            //     this.$route.name)
            // ) {
            //     if (this.$route.params.language) {
            //         this.$store.commit(
            //             "explorerStore/saveSelectedLanguageCode",
            //             this.$route.params.language
            //         );
            //         this.$store.dispatch("explorerStore/getLanguageData");
            //     }
            // }
        })();
    }
};
</script>

<style lang="scss" scoped>
.style-container {
    position: relative;
    min-width: 1200px;
}

.style-menu {
    position: absolute;
    width: 250px;
    left: 0;
}

.style-content {
    position: relative;
    left: 250px;
    height: 100vh;
    overflow: auto;
    min-width: 1200px;
    max-width: 1200px;
}
</style>
