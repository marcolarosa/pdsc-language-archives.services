<template>
    <div class="row pad-header">
            <img src="src/assets/images/coedl-logo.png" class="style-logo">
            <div class="style-heading float-right">labs</div>
    </div>
</template>

<script>
export default {
    props: {
        banner: Boolean
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.pad-header {
    margin: 50px 0px;
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
}

.style-logo {
    min-width: 500px;
    max-width: 500px;
}

.style-heading {
    line-height: 100px;
    font-size: 3.5em;
    margin-left: 20px;
}
</style>
