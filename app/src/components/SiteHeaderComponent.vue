<template>
    <div class="row pad-header">
        <router-link to="/">
            <img src="assets/images/coedl-logo.png" class="style-logo">
        </router-link>
        <div class="style-heading">labs</div>
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
    margin: 10px 0px;
    padding: 10px 0px;
    border-bottom: 1px solid #ccc;
}

.style-heading {
    line-height: 80px;
    font-size: 2.5em;
    margin-left: 20px;
}
.style-logo {
    min-width: 100%;
    max-width: 100%;
}
@media only screen and (min-width: 768px) {
    .pad-header {
        margin: 20px 0px;
        padding: 20px 0px;
        border-bottom: 1px solid #ccc;
    }
    .style-heading {
        line-height: 90px;
        font-size: 2.5em;
        margin-left: 20px;
    }
    .style-logo {
        min-width: 400px;
        max-width: 400px;
    }
}
@media screen and (min-width: 1024px) {
    .style-heading {
        line-height: 105px;
        font-size: 3.5em;
        margin-left: 20px;
    }
    .style-logo {
        min-width: 500px;
        max-width: 500px;
    }
}
</style>
