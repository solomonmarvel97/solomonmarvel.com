<template>
    <div class="products" id="products">
        <div class="mt-5">
            <h1 class="center">Free Gifts</h1>
        </div>
        <div class="icon-set">
            <img class="icon" src="@/assets/icons/arrow-left.svg" />
            <img class="icon" src="@/assets/icons/arrow-right.svg" />
        </div>
        <div class="container">

            <a class="item" v-for="i, index in resources" :href="i.link" key="index" target="_blank">
                <img class="mb-1"
                    :src="i.image"
                    alt="" />
            </a>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            resources: [
                {
                    image: require('@/assets/images/resources/python.png'),
                    link: 'https://python-for-starters.upages.xyz/'
                },
                {
                    image: require('@/assets/images/resources/bash.png'),
                    link: '#'
                },
                {
                    image: require('@/assets/images/resources/git.png'),
                    link: '#'
                },
                {
                    image: require('@/assets/images/resources/javascript.png'),
                    link: '#'
                },
                {
                    image: require('@/assets/images/resources/unix_dir.png'),
                    link: '#'
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
    display: flex;
    gap: 50px;
    row-gap: 50px;
    column-gap: 50px;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: scroll;
    margin: 0 auto;
    padding: 2em;
}

.products .container .item {
    min-width: 300px;
    height: 100%;
    border-radius: 10px;
}

.products .container .item img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.products .container .item .tag {
    font-size: 14px;
}

.products .container .item .title {
    color: #151515;
    font-weight: 500;
    font-size: 20px;
}

.products .container .item .description {}

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