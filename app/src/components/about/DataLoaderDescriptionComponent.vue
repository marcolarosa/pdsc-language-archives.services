<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>Data Loader</h4>
        </div>
        <p>
            The
            <a href="http://librarybox.us/" target="_blank">LibraryBox</a> is an open source, portable digital file
            distribution tool based on inexpensive hardware that enables delivery of educational, healthcare, and other
            vital information to individuals off the grid.
        </p>
        <p>
            The aim of this project was to develop a cross platform GUI application that could be used to load data onto
            a library box for repatriation to indigenous communities. When installing data onto a LibraryBox the application
            loads an instance of the Nabu Catalog Viewer, configured to operate in a totally standalone mode.
        </p>
        <p>
            As the researchers often deliver content and materials on portable disks, a subsequent development added the ability
            to install a limited version of the viewer for use as a local browser to the available content. This viewer operates
            on external devices without the need of a webserver or other system technology.
        </p>
        <p>
            - Download the MacOS version of the application from
            <a
                href="http://www.language-archives.services/downloads/paradisec-data-loader.zip"
                target="_blank"
            >here</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-librarybox-installer"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-librarybox-installer</a>
        </p>
        <div class="outer">
            <img src="assets/images/dataloader.jpg" class="style-image position-image1">
            <img src="assets/images/dataloader1.jpg" class="style-image position-image2">
            <img src="assets/images/dataloader2.jpg" class="style-image position-image3">
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
