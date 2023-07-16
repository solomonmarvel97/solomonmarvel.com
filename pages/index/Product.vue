<template>
    <section class="products mt-5" id="products">
    <div class="mt-5 mb-3">
            <h1>Free learning guides</h1>
        </div>
        <div class="container">
            <a class="item" v-for="i, index in resources" :href="i.link" key="index" target="_blank">
                <img class="mb-1"
                    :src="i.image"
                    alt="" />
            </a>
        </div>

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
    width: 750px;
}

.products .header>* {
    text-align: center;
}

.products .container {
    display: grid;
    gap: 20px;
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.products .container .item img {
    object-fit: contain;
    width: 100%;
    border-radius: 4px;
}

.products .container .item .tag {
    font-size: 14px;
}

.products .container .item .title {
    color: #151515;
    font-weight: 500;
    font-size: 20px;
}


.products .container .item .price {
    color: #151515;
    font-weight: 500;
}

@media (max-width: 1000px) {
    .products .header {
        width: 100%;
    }
}
</style>
