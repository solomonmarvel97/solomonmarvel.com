<template>
    <section class="products" id="products">
    </section>
</template>

<script>
export default {
    data () {
        return {
            resources: [
                {
                    image: require('@/assets/images/resources/python.png'),
                    link: 'https://pythonforstarters.solomonmarvel.com'
                },
                {
                    image: require('@/assets/images/resources/bash.png'),
                    link: 'https://bashlaunchbox.solomonmarvel.com'
                },
                {
                    image: require('@/assets/images/resources/git.png'),
                    link: 'https://gitdeveloperguide.solomonmarvel.com'
                },
                {
                    image: require('@/assets/images/resources/javascript.png'),
                    link: 'https://javascriptlaunchbox.solomonmarvel.com'
                },
                {
                    image: require('@/assets/images/resources/linux.png'),
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
