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
import python from "@/assets/images/resources/python.png";
import bash from "@/assets/images/resources/bash.png";
import git from "@/assets/images/resources/git.png";
import javascript from "@/assets/images/resources/javascript.png";
import linux from "@/assets/images/resources/linux.png";


export default {
    data () {
        return {
            resources: [
                {
                    image: python,
                    link: 'https://pythonforstarters.solomonmarvel.com'
                },
                {
                    image: bash,
                    link: 'https://bashlaunchbox.solomonmarvel.com'
                },
                {
                    image: git,
                    link: 'https://gitdeveloperguide.solomonmarvel.com'
                },
                {
                    image: javascript,
                    link: 'https://javascriptlaunchbox.solomonmarvel.com'
                },
                {
                    image: linux,
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
