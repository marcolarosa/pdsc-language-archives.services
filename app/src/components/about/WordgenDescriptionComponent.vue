<template>
    <el-card class="box-card style-card" shadow="never">
        <div slot="header" class="clearfix">
            <h4>Word Generator</h4>
        </div>
        <p>
            Have you ever wanted to create a list of possible words in a language you
            are working on? Have you started creating a dictionary but now need to
            find words that are not yet recorded? This could be the app for you.
        </p>
        <p>
            Word Generator is a free web service that will generate a list of
            possible words based on a list of words
            that you know, together with a list of consonants and vowels that you
            upload to the service.
        </p>
        <p>
            It has a number of settings you can alter to adjust the degree of
            probability, the number and the length of words you want to produce.
            You can then ask speakers to look through the list to help them
            think of words that are not already in the dictionary, and it could
            provoke useful discussion about other forms and meanings.
        </p>
        <p>
            - The service is accessible at <a href="http://paradisec.org.au/wordgen/wg.php" target="_blank">http://paradisec.org.au/wordgen/wg.php</a><br />
        </p>
        <div class="outer">
            <img src="assets/images/wordgen.png" class="style-image position-image1">
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
