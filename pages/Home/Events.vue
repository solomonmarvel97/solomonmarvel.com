<template>
    <section class="products" id="products">
    </section>
</template>

<script>
import one from "@/assets/images/resources/python.png";
import two from "@/assets/images/resources/bash.png";
import three from "@/assets/images/resources/git.png";
import four from "@/assets/images/resources/javascript.png";
import five from "@/assets/images/resources/linux.png";

export default {
    data () {
        return {
            resources: [
                {
                    image: one,
                    link: 'https://pythonforstarters.solomonmarvel.com'
                },
                {
                    image: two,
                    link: 'https://bashlaunchbox.solomonmarvel.com'
                },
                {
                    image: three,
                    link: 'https://gitdeveloperguide.solomonmarvel.com'
                },
                {
                    image: four,
                    link: 'https://javascriptlaunchbox.solomonmarvel.com'
                },
                {
                    image: five,
                    link: 'https://linuxbasicguide.solomonmarvel.com'
                },
            ]
        }
    }
}
</script>

<style scoped>
.products .header {
    display: grid;
    place-items: center;
    padding-top: 5em;
    margin: 0 auto;
}

.products .header {
}

.products .header>* {
}

.products .container {
    display: flex;
    gap: 20px;
    row-gap: 20px;
    column-gap: 20px;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: scroll;
}

.products .container .item {
    min-width: 250px;
    height: 100%;
}

</style>
