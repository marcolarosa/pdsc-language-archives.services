<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>50 Words</h4>
        </div>
        <p>A blurb?</p>
        <p>
            - Use the application @
            <a
                href="http://language-archives.services/50words/"
                target="_blank"
            >http://language-archives.services/50words/</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-50-words"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-50-words</a>
        </p>
        <div class="outer">
            <!-- <img src="assets/images/mobile-viewer1.jpg" class="style-image position-image1">
            <img src="assets/images/mobile-viewer2.jpg" class="style-image position-image2">-->
        </div>
    </el-card>
</template>

<script>
import SiteHeaderComponent from "src/components/SiteHeaderComponent.vue";

export default {};
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
