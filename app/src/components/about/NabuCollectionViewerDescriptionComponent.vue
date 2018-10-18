<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Nabu Collection Viewer</h4>
        </div>
        <p>
            The collection viewer for Nabu was developed as a loosely coupled extension of the main application. Where Nabu is a
            traditional server application with a web frontend to the catalog, the viewer is an AngularJS application that
            uses Nabu as a data feed.
        </p>
        <p>
            - The source code is accessible @ <a href="https://github.com/marcolarosa/pdsc-collection-viewer" target="_blank">https://github.com/marcolarosa/pdsc-collection-viewer</a>
        </p>
        <div class="outer ">
            <img src="assets/images/viewer.jpg" class="style-image position-image1">
            <img src="assets/images/viewer1.jpg" class="style-image position-image2">
            <img src="assets/images/viewer2.jpg" class="style-image position-image3">
        </div>
    </el-card>
</template>

<script>
import SiteHeaderComponent from "src/components/SiteHeaderComponent.vue";
import NabuDescriptionComponent from "./NabuDescriptionComponent.vue";

export default {
    components: {
        NabuDescriptionComponent
    }
};
</script>

<style lang="scss" scoped>
.style-image {
    margin: 20px 2%;
    width: 90%;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    -moz-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
}

.style-card {
    border: unset;
}

.outer {
    z-index: 10;
}

@media only screen and (min-width: 1000px) {
    .style-image {
        width: 600px;
    }

    .outer {
        max-width: 1200px;
        position: absolute;
    }

    .position-image1 {
        position: relative;
        z-index: 5;
        margin-left: 50px;
    }

    .position-image2 {
        position: relative;
        margin-top: -200px;
        margin-left: 200px;
    }

    .position-image3 {
        position: relative;
        z-index: -5;
        margin-top: -800px;
        margin-left: 450px;
    }
}
</style>
