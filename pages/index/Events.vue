<template>
    <section class="products" id="products">
        <div class="mt-5 mb-3">
            <h1>Resources</h1>
        </div>

        <div class="container">
            <div class="">
            <iframe
            src="https://lu.ma/embed-checkout/evt-lVnwY3GhLpvseUt"
            width="600"
            height="450"
            frameborder="0"
            style="border: .1px solid #1F1E1E; border-radius: 12px;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            ></iframe>
            </div>

            <div class="">
            <iframe
            src="https://lu.ma/embed-checkout/evt-Dpr7357IVDqpIeL"
            width="600"
            height="450"
            frameborder="0"
            style="border: .1px solid #1F1E1E; border-radius: 12px;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            ></iframe>
            </div>

            <div class="item">
            <iframe
            src="https://lu.ma/embed-checkout/evt-uwnWOsg22g3VLE8"
            width="600"
            height="450"
            frameborder="0"
            style="border: .1px solid #1F1E1E; border-radius: 12px;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            ></iframe>
            </div>

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
