<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>Language Archives data visualisation</h4>
        </div>
        <p>
            The
            <a
                href="http://www.language-archives.org/"
                target="_blank"
            >Open Language Archives Community</a>
            is an international partnership of institutions and individuals who are creating a worldwide virtual
            library of language resources by: (i) developing consensus on best current practice for the digital
            archiving of language resources, and (ii) developing a network of interoperating repositories and
            services for housing and accessing such resources.
        </p>
        <p>
            This project was a first attempt at answering the question: Can we simplify the discovery of those
            languages that do not have many resources?
        </p>
        <p>
            - Use the application @
            <a
                href="http://language-archives.services/olacvis/"
                target="_blank"
            >http://language-archives.services/olacvis/</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-olac-visualisation"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-olac-visualisation</a>
        </p>
        <div class="outer">
            <el-carousel type="card">
                <el-carousel-item v-for="(image, idx) in images" :key="idx">
                    <el-image :src="image" fit="fill"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import SiteHeaderComponent from "src/components/SiteHeaderComponent.vue";
import NabuDescriptionComponent from "./NabuDescriptionComponent.vue";

export default {
    data() {
        return {
            images: [
                "assets/images/olacvis.jpg",
                "assets/images/olacvis1.jpg",
                "assets/images/olacvis2.jpg"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
