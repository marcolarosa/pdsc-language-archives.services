<template>
    <div class="px-5">
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
            <br />- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-collection-viewer-v2"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-collection-viewer-v2</a>
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
export default {
    data() {
        return {
            images: [
                "assets/images/mobile-viewer1.png",
                "assets/images/mobile-viewer2.png",
                "assets/images/mobile-viewer3.png"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
