<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>
                Setting up a
                <a
                    href="https://en.wikipedia.org/wiki/Raspberry_Pi"
                    target="_blank"
                >Raspberry Pi</a> as a repatriation device
            </h4>
        </div>
        <div>
            <h5>1. Hardware Requirements</h5>
            <ol>
                <li>A raspberry Pi 3 model B+</li>
                <li>Power supply</li>
                <li>Case</li>
                <li>16 GB MicroSD Card (Class 10) - Raspberry Pi Foundation Sourced MicroSD Card with NOOBS</li>
                <li>HDMI Cable</li>
                <li>A USB disk to hold the data</li>
            </ol>Typically you would purchase this in a
            <a
                href="https://raspberry.piaustralia.com.au/little-bird-raspberry-pi-3-complete-starter-kit"
                target="_blank"
            >kit like this one.</a>
            Note that the USB disk is purchased separately.
        </div>

        <div class="my-5">
            <h5>2. One Time Operating System Setup</h5>
            <p class="style-text">
                Following assembly of the device connect a monitor using the HDMI cable and a USB keyboard and mouse. You will
                also need to connect the device to the network using an Ethernet cable. Following this, plug in the power cord
                and watch the boot sequence; you will need to press and hold the
                <strong>shift</strong> key (there will be a message on screen telling you this) to get in to the
                installation sequence. The installation menu looks like:
            </p>
            <img src="assets/images/noobs.png" class="style-image">

            <p class="style-text">
                Select
                <strong>Raspbian Lite</strong>, deselect
                <em>Raspbian (RECOMMENDED)</em> then press the
                <strong>Install</strong> button at the top and follow the prompts.
                (These devices are not very
                powerful so we install a lighter version of the operating system which consumes less resources thereby making the
                device more responsive.)
            </p>
        </div>

        <div class="my-5">
            <h5>3. One Time Device Configuration</h5>
            <p class="style-text">
                After reinstalling the operating system and rebooting the device, the device IP address will be displayed a few lines
                above the login prompt. Make a note of that.
            </p>
            <img src="assets/images/raspberrypi-bootup.jpg" class="style-image">
            <p class="style-text">
                Log in to the device as the user
                <strong>pi</strong> and with the password
                <strong>raspberry</strong> then enter the
                command
                <strong>sudo systemctl start ssh</strong>.
            </p>
            <p class="style-text">
                At this point, you can SSH to the device (ssh -A pi@{IP ADDRESS FROM ABOVE}) from your normal machine or continue working locally. Either way, the next
                step is to configure the device as a WIFI access point with the following commands:
            </p>
            <ol>
                <li>sudo bash -c 'echo "nameserver 1.1.1.1" > /etc/resolv.conf'</li>
                <li>curl --silent --output /tmp/setup-pi.sh http://www.language-archives.services/downloads/setup-pi.sh</li>
                <li>sudo bash /tmp/setup-pi.sh</li>
            </ol>
        </div>

        <div class="my-5">
            <h5>4. Loading data</h5>
            <p class="style-text">
                At this point you can fire up the data loader and load some data onto the USB disk.
                See
                <router-link
                    to="/about/data-loader"
                >the data loader documentation for more information.</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.style-text {
    font-size: 1em;
}

.style-image {
    width: 500px;
}
</style>
