<template>
    <el-menu default-active="1" :router="true" class="style-menu">
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
</style>
