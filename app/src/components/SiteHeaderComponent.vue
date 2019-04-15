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
    margin: 50px 0px;
    padding: 20px 0px;
    border-bottom: 1px solid #ccc;
}

.style-heading {
    line-height: 100px;
    font-size: 3.5em;
    margin-left: 20px;
}
@media only screen and (min-width: 600px) {
    .style-heading {
        line-height: 70px;
        font-size: 3em;
        margin-left: 20px;
    }
}
@media only screen and (min-width: 900px) {
    .style-heading {
        line-height: 100px;
        font-size: 3.5em;
        margin-left: 20px;
    }
}

.style-logo {
    min-width: 100%;
    max-width: 100%;
}
@media only screen and (min-width: 600px) {
    .style-logo {
        min-width: 350px;
        max-width: 350px;
    }
}
@media only screen and (min-width: 900px) {
    .style-logo {
        min-width: 500px;
        max-width: 500px;
    }
}
</style>
