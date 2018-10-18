<template>
    <el-menu default-active="1" :router="true" class="style-menu">
        <div class="row">
            <div class="col text-center py-2">
                <router-link to="/">
                    <img src="assets/images/coedl-logo.png" class="style-logo">
                </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col text-center py-2">
                Language Archives<br /> Explorer
            </div>
        </div>
        <hr />
        <el-menu-item index="1" route="/olac-explorer/browse-country">
            <span>Browse Country Data</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.style-menu {
    position: fixed;
    left: 0;
    height: 100vh;
    min-width: 220px;
}

.style-logo {
    width: 200px;
}
</style>
