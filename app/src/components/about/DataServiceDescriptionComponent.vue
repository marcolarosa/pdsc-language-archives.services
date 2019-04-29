<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>Data Loader</h4>
        </div>
        <p>
            The
            <router-link to="/about/olac-vis">OLAC visualisation</router-link>was an acceptable first attempt at making the data
            listed at the language archives site accessible but it was not without issues. The technology underpinning the site
            proved to be slow and there was no sense of how the underlying data was changing with time.
        </p>
        <p>
            Accordingly, the aim of the current project is create a service which presents OLAC data in a summary form, and then
            archives the data each month, thus providing the ability to create a diachronic view of the data in order to better understand
            which languages were actively having content added to OLAC archives.
        </p>
        <p>
            - The service is accessible at
            <a
                href="http://language-archives.services/api"
                target="_blank"
            >http://language-archives.services/api</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-olac-datasource"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-olac-datasource</a>
        </p>
        <div class="outer">
            <el-image src="assets/images/olacdata.jpg" fit="fill"/>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>
