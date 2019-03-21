<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Mobile Collection Viewer</h4>
        </div>
        <p>
            During the initial design conversation for the
            <router-link :to="{ path: '/about/data-loader' }">data loader</router-link>&nbsp;project
            it was decided that the proof of concept would use the
            <router-link :to="{ path: '/about/nabu-viewer' }">Nabu Viewer</router-link>&nbsp;for the display component.
        </p>
        <p>
            Built specifically for the users of Nabu, the first real world demonstrations showed that it was a poor interface for
            the largely non technical audience of a repatriation device. Specifically, the Nabu viewer interface is too text based
            and difficult to use on mobile devices.
        </p>
        <p>
            This project is about building a more modern, visual interface to the content installed onto a repatriation device such
            that the barrier of entry to discovery for non technical users is lowered, or even removed.
        </p>
        <p>
            - Use the application @
            <a
                href="http://language-archives.services/mobile-viewer/"
                target="_blank"
            >http://language-archives.services/mobile-viewer/</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-collection-viewer-v2"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-collection-viewer-v2</a>
        </p>
        <div class="outer">
            <img src="assets/images/mobile-viewer1.jpg" class="style-image position-image1">
            <img src="assets/images/mobile-viewer2.jpg" class="style-image position-image2">
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
