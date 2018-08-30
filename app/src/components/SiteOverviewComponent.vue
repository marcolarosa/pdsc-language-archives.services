<template>
    <div>
        <div class="row">
            <div class="col">
                <p>
                    The Centre of Excellence for the Dynamics of Language is focussed on investigating
                    how languages <a href="http://www.dynamicsoflanguage.edu.au/research/language-diversity/" target="_blank">vary</a>, 
                    how we learn <a href="http://www.dynamicsoflanguage.edu.au/research/language-learning/" target="_blank">them</a>, 
                    how we <a href="http://www.dynamicsoflanguage.edu.au/research/language-processing/" target="_blank">process</a>
                    them and how they <a href="http://www.dynamicsoflanguage.edu.au/research/language-evolution/" target="_blank">evolve</a>.
                </p>
                <p>
                    A key aspect of our work is the use and development of cutting edge technologies 
                    to facilitate community access to primary records at the same time as
                    curating them for research purposes. On this site we provide a
                    visualisation of records in the world's language archives based on the Open
                    Language Archives Community service. This gives links to what records are
                    available for each language.
                </p>
                <p>
                    To read more about what we do 
                    <a href="http://www.dynamicsoflanguage.edu.au" target="_blank">visit our main site.</a>
                </p>

                <div>
                    <el-carousel :interval="4000" type="card" height="340px">
                        <el-carousel-item v-for="item in items" :key="item.id">
                            <router-link :to="item.uri">
                                <h5>{{ item.name }}</h5>
                                <img :src="item.image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="text-center"><em>(click the tiles to see more information)</em></div>
            </div>
        </div>
        <div class="row pad-funding-note">
            <div class="col">
                <p class='text-center'>
                    <em>
                        <strong>
                            The projects shown in this site have been funded as part of the<br/>
                            Centre of Excellence for the Dynamics of Language (ARC grant CE140100041). 
                        </strong>
                    </em>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: "Nabu",
                    image: "src/assets/images/nabu.jpg",
                    uri: "/about/nabu"
                },
                {
                    id: 2,
                    name: "Language Archives Data Visualisation",
                    image: "src/assets/images/olacvis.jpg",
                    uri: "/about/olac-vis"
                },
                {
                    id: 3,
                    name: "Language Archives Data Service",
                    image: "src/assets/images/olacdata.jpg",
                    uri: "/about/data-service"
                },
                {
                    id: 4,
                    name: "Data Loader",
                    image: "src/assets/images/dataloader.jpg",
                    uri: "/about/data-loader"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "assets/variables.scss";
.pad-funding-note {
    border-top: 1px solid #ccc;
    margin-top: 50px;
}

.style-image {
    height: 300px;
}

.el-carousel__item h5 {
    color: $link-color;
    opacity: 0.75;
    margin: 0;
    padding: 10px;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: $white;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    -moz-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: $white;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    -moz-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
}
</style>
