<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>50 Words</h4>
        </div>
        <p>
            This project aims to provide resources for
            schools to teach at least fifty words in their local language.
            Australian Indigenous languages have many thousands of words but
            we are displaying just some on this site, with audio or video.
        </p>
        <p>
            - Use the application @
            <a
                href="http://50words.online"
                target="_blank"
            >http://50words.online</a>
            <br />- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-50-words"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-50-words</a>
        </p>
        <div class="outer">
            <el-carousel type="card" height="500px">
                >
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
                "assets/images/50words.png",
                "assets/images/50words1.png",
                "assets/images/50words2.png"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
