<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Nabu - the <a href="http://www.paradisec.org.au">PARADISEC</a> catalog</h4>
        </div>
        <p>
            Nabu is a digital media item management system that provides a catalog of audio and video items, metadata for these items, and information about the workflow status of the items.
        </p>
        <p>
            'Nabu' is a word in the South Efate language for 'road', as a connector of various locations.
        </p>
        <p>
            PARADISEC developed the Open Source system 'Nabu' in 2012 with funding from the Australian Research Council LIEF (Linkage Infrastructure Equipment and Facilities) scheme (LE11000142).
        </p>
        <p>
            - Browse the catalog @ <a href="http://catalog.paradisec.org.au" target="_blank">http://catalog.paradisec.org.au</a><br />
            - The source code is accessible @ <a href="https://github.com/nabu-catalog/nabu" target="_blank">https://github.com/nabu-catalog/nabu</a>
        </p>
        <div class="outer ">
            <img src="assets/images/nabu.jpg" class="style-image position-image1">
            <img src="assets/images/nabu1.jpg" class="style-image position-image2">
            <img src="assets/images/nabu2.jpg" class="style-image position-image3">
        </div>
    </el-card>
</template>

<script>
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
        margin-top: -150px;
        margin-left: 200px;
    }

    .position-image3 {
        position: relative;
        z-index: -5;
        margin-top: -300px;
        margin-left: 350px;
    }
}
</style>
