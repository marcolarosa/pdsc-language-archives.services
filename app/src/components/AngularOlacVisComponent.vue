<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Language Archives data visualisation</h4>
        </div>
        <p>
            The <a href="http://www.language-archives.org/" target="_blank">Open Language Archives Community</a>
            is an international partnership of institutions and individuals who are creating a worldwide virtual 
            library of language resources by: (i) developing consensus on best current practice for the digital 
            archiving of language resources, and (ii) developing a network of interoperating repositories and 
            services for housing and accessing such resources.
        </p>
        <p>
            This project was a first attempt at answering the question: Can we simplify the discovery of those
            languages that do not have manuy resources?
        </p>
        <p>
            - Use the application @ <a href="http://language-archives.services/olacvis/" target="_blank">http://language-archives.services/olacvis/</a><br/>
            - The source code is accessible @ <a href="https://github.com/marcolarosa/pdsc-olac-visualisation" target="_blank">https://github.com/marcolarosa/pdsc-olac-visualisation</a>
        </p>
        <div class="outer ">
            <img src="src/assets/images/olacvis.jpg" class="style-image position-image1">
            <img src="src/assets/images/olacvis1.jpg" class="style-image position-image2">
            <img src="src/assets/images/olacvis2.jpg" class="style-image position-image3">
        </div>
    </el-card>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent.vue";
import NabuDescriptionComponent from "./NabuDescriptionComponent.vue";

export default {
    components: {
        NabuDescriptionComponent
    }
};
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
