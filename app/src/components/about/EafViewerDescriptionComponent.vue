<template>
    <div class="px-lg-5">
        <div slot="header" class="clearfix">
            <h4>EAF Viewer</h4>
        </div>
        <p>
            This tool aims to quickly reveal EAF files that have holes or other data issues. Ater selecting
            a folder of EAF files the tool will process each and present a data table showing the statistics
            extracted from each file. Specifically, one can see the approximate file duration; number of timeslots;
            number of tiers; whether any tiers are empty; the start and end time; the number of reference and alignable
            annotations and the number of unmapped annotations (an annotation without a parent)
        </p>
        <p>
            Selecting a file brings up two sunburst visualisations showing the hierarchy of content in the file. The first
            is a mapping of the annotations to the timeslots (where the timeslots are the first ring from the centre) and
            the second is a mapping of the annotations to the tiers (where the tiers are the first ring from the centre).
            Empty annotations are coloured black and clicking a timeslot or tier will focus that data.
        </p>
        <p>
            This is desktop application. Download the latest version from
            <a
                href="https://github.com/marcolarosa/pdsc-eaf-viewer/releases"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-eaf-viewer/releases</a>
        </p>
        <p>
            <br />- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-eaf-viewer"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-eaf-viewer</a>
        </p>
        <div class="outer">
            <el-carousel type="card" height="500px">
                <el-carousel-item v-for="(image, idx) in images" :key="idx">
                    <el-image :src="image" fit="contain" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import SiteHeaderComponent from "src/components/SiteHeaderComponent.vue";

export default {
    data() {
        return {
            images: [
                "assets/images/eaf-viewer1.png",
                "assets/images/eaf-viewer2.png",
                "assets/images/eaf-viewer3.png"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.style-image {
    width: auto;
    height: 100%;
}
</style>
