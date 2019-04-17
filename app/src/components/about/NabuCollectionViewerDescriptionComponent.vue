<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>Nabu Collection Viewer</h4>
        </div>
        <p>
            The collection viewer for Nabu was developed as a loosely coupled extension of the main application. Where Nabu is a
            traditional server application with a web frontend to the catalog, the viewer is an AngularJS application that
            uses Nabu as a data feed.
        </p>
        <p>
            - The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-collection-viewer"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-collection-viewer</a>
        </p>
        <div class="outer">
            <img src="assets/images/viewer.jpg" class="style-image position-image1">
            <img src="assets/images/viewer1.jpg" class="style-image position-image2">
            <img src="assets/images/viewer2.jpg" class="style-image position-image3">
        </div>
    </div>
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
</style>
