<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>
                Nabu - the
                <a href="http://www.paradisec.org.au">PARADISEC</a> catalog
            </h4>
        </div>
        <p>Nabu is a digital media item management system that provides a catalog of audio and video items, metadata for these items, and information about the workflow status of the items.</p>
        <p>'Nabu' is a word in the South Efate language for 'road', as a connector of various locations.</p>
        <p>PARADISEC developed the Open Source system 'Nabu' in 2012 with funding from the Australian Research Council LIEF (Linkage Infrastructure Equipment and Facilities) scheme (LE11000142).</p>
        <p>
            - Browse the catalog @
            <a
                href="http://catalog.paradisec.org.au"
                target="_blank"
            >http://catalog.paradisec.org.au</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/nabu-catalog/nabu"
                target="_blank"
            >https://github.com/nabu-catalog/nabu</a>
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
export default {
    data() {
        return {
            images: [
                "assets/images/nabu.jpg",
                "assets/images/nabu1.jpg",
                "assets/images/nabu2.jpg"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
