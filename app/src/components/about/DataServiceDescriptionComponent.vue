<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Data Loader</h4>
        </div>
        <p>
            The <router-link to="/about/olac-vis">OLAC visualisation</router-link> was an acceptable first attempt at making the data
            listed at the language archives site accessible but it was not without issues. The technology underpinning the site
            proved to be slow and there was no sense of how the underlying data was changing with time.
        </p>
        <p>
            Accordingly, the aim of the current project is create a service which presents OLAC data in a summary form, and then
            archives the data each month, thus providing the ability to create a diachronic view of the data in order to better understand
            which languages were actively having content added to OLAC archives.
        </p>
        <p>
            - The service is accessible at <a href="http://language-archives.services/api" target="_blank">http://language-archives.services/api</a><br />
            - The source code is accessible @ <a href="https://github.com/marcolarosa/pdsc-olac-datasource" target="_blank">https://github.com/marcolarosa/pdsc-olac-datasource</a>
        </p>
        <div class="outer">
            <img src="assets/images/olacdata.jpg" class="style-image position-image1">
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
