<template>
    <div>
        <div class="row">
            <div class="col">
                <p>
                    The Centre of Excellence for the Dynamics of Language is focussed on investigating
                    how languages
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-diversity/"
                        target="_blank"
                    >vary</a>,
                    how we learn
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-learning/"
                        target="_blank"
                    >them</a>,
                    how we
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-processing/"
                        target="_blank"
                    >process</a>
                    them and how they
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-evolution/"
                        target="_blank"
                    >evolve</a>.
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
                    <a
                        href="http://www.dynamicsoflanguage.edu.au"
                        target="_blank"
                    >visit our main site.</a>
                </p>
                <p class="text-muted style-link">
                    All material is provided under a
                    <a
                        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                        target="_blank"
                    >GNU/GPL General Public License</a>
                </p>

                <div class="row">
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[0].uri">{{items[0].name}}</router-link>
                            </div>
                            <router-link :to="items[0].uri">
                                <img :src="items[0].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[1].uri">{{items[1].name}}</router-link>
                            </div>
                            <router-link :to="items[1].uri">
                                <img :src="items[1].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[2].uri">{{items[2].name}}</router-link>
                            </div>
                            <router-link :to="items[2].uri">
                                <img :src="items[2].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[3].uri">{{items[3].name}}</router-link>
                            </div>
                            <router-link :to="items[3].uri">
                                <img :src="items[3].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[4].uri">{{items[4].name}}</router-link>
                            </div>
                            <router-link :to="items[4].uri">
                                <img :src="items[4].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[5].uri">{{items[5].name}}</router-link>
                            </div>
                            <router-link :to="items[5].uri">
                                <img :src="items[5].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[6].uri">{{items[6].name}}</router-link>
                            </div>
                            <router-link :to="items[6].uri">
                                <img :src="items[6].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[7].uri">{{items[7].name}}</router-link>
                            </div>
                            <router-link :to="items[7].uri">
                                <img :src="items[7].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4">
                        <el-card class="box-card">
                            <div slot="header">
                                <router-link :to="items[8].uri">{{items[8].name}}</router-link>
                            </div>
                            <router-link :to="items[8].uri">
                                <img :src="items[8].image" class="style-image mx-auto d-block">
                            </router-link>
                        </el-card>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </div>
        <div class="row pad-funding-note">
            <div class="col">
                <p class="text-center">
                    <em>
                        <strong>
                            The projects shown in this site are led by
                            <a
                                href="http://nthieberger.net"
                                target="_blank"
                            >Nick Thieberger</a> and
                            have been funded as part of the
                            <br>ARC Centre of Excellence for the Dynamics of Language (ARC grant CE140100041).
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
                    id: 0,
                    name: "Nabu",
                    image: "assets/images/nabu.jpg",
                    uri: "/about/nabu"
                },
                {
                    id: 1,
                    name: "Nabu Collection Viewer",
                    image: "assets/images/viewer.jpg",
                    uri: "/about/nabu-viewer"
                },
                {
                    id: 2,
                    name: "Nabu Collection Mobile Viewer",
                    image: "assets/images/mobile-viewer1.jpg",
                    uri: "/about/mobile-viewer"
                },
                {
                    id: 3,
                    name: "Language Archives Data Visualisation",
                    image: "assets/images/olacvis.jpg",
                    uri: "/about/olac-vis"
                },
                {
                    id: 4,
                    name: "Language Archives Explorer",
                    image: "assets/images/olac-explorer.png",
                    uri: "/olac-explorer/explore-country"
                },
                {
                    id: 5,
                    name: "Language Archives Data Service",
                    image: "assets/images/olacdata.jpg",
                    uri: "/about/data-service"
                },
                {
                    id: 6,
                    name: "Data Loader",
                    image: "assets/images/dataloader.jpg",
                    uri: "/about/data-loader"
                },
                {
                    id: 7,
                    name: "Word Generator",
                    image: "assets/images/wordgen.png",
                    uri: "/about/wordgen"
                },
                {
                    id: 8,
                    name: "Raspberry Pi as a Repatriation Device",
                    image: "assets/images/raspberrypi-ar21.svg",
                    uri: "/about/pi"
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
    width: 100%;
    height: auto;
}
.style-link {
    font-size: 14px;
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
