<template>
        <el-card class="box-card style-card" shadow="never">
            <div slot="header" class="clearfix">
                <h4>Data Loader</h4>
            </div>
            <p>
                The <a href="http://librarybox.us/" target="_blank">LibraryBox</a> is an open source, portable digital file
                distribution tool based on inexpensive hardware that enables delivery of educational, healthcare, and other
                vital information to individuals off the grid.
            </p>
            <p>
                The aim of this project was to develop a cross platform GUI application that could be used to load data onto
                a library box for repatriation to indiginous communities. When installing data onto a LibraryBox the application
                loads an instance of the Nabu Catalog Viewer, configured to operate in a totally standalone mode.
            </p>
            <p>
                As the researchers often deliver content and materials on portable disks, a subsequent development added the ability
                to install a limited version of the viewer for use as a local browser to the available content. This viewer operates
                on external devices without the need of a webserver or other system technology.
            </p>
            <p>
                - Download the MacOS version of the application from 
                    <a href="http://www.language-archives.services/downloads/paradisec-data-loader.zip" target="_blank">here</a><br/>
                - The source code is accessible @ <a href="https://github.com/marcolarosa/pdsc-librarybox-installer" target="_blank">https://github.com/marcolarosa/pdsc-librarybox-installer</a>
            </p>
            <div class="outer ">
                <img src="src/assets/images/dataloader.jpg" class="style-image position-image1">
                <img src="src/assets/images/dataloader1.jpg" class="style-image position-image2">
                <img src="src/assets/images/dataloader2.jpg" class="style-image position-image3">
            </div>
        </el-card>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent.vue";
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
        margin-top: -300px;
        margin-left: 200px;
    }

    .position-image3 {
        position: relative;
        z-index: -5;
        margin-top: -900px;
        margin-left: 450px;
    }
}
</style>
