<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>Data Loader</h4>
        </div>
        <p>
            The Data Loader is a tool to build a portable catalog of data onto a
            <router-link to="/about/pi">Raspberry Pi</router-link>&nbsp;or a portable USB disk as a means
            of repatriating data back to the original community. This tool allows the researcher to load a set of items
            from Nabu onto a repatriation device along with a content viewer for the data.
        </p>
        <p>
            When loading onto a Raspberry Pi the loader installs the
            <router-link to="/about/mobile-viewer">mobile viewer</router-link>&nbsp;as the interface to the content
            whereas loading onto a USB Disk generates a simpler static HTML site.
        </p>
        <p>
            Originally, this project was developed to simplify the loading of data onto a
            <a
                href="http://librarybox.us/"
                target="_blank"
            >LibraryBox</a> (an open source, portable digital file
            distribution tool based on inexpensive hardware that enables delivery of educational, healthcare, and other
            vital information to individuals off the grid).
            However, as LibraryBoxes are no longer in active development this functionality has been deprecated.
        </p>
        <p>
            - This is a desktop application. Download the latest version from
            <a
                href="https://github.com/marcolarosa/pdsc-data-loader/releases"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-data-loader/releases</a>.
            <br />- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-data-loader"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-data-loader</a>.
        </p>
        <div class="outer">
            <el-image src="assets/images/dataloader.new.png" fit="fill"></el-image>
            <!-- <img src="assets/images/dataloader.new.png" class="style-image"> -->
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
