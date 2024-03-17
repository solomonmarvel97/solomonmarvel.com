<template>
    <div>
        <div class="banner">
            <p>{{ message }}</p>
            <a class="btn-primary-outline-small" :href="action_url" target="_blank"> {{ action_text }}</a>
        </div>

        <div class="banner-mobile">
            <a :href="action_url" target="_blank">
                <p>{{ message }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        action_text: {
            type: String,
            required: true
        },
        action_url: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.banner {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(61, 61, 61);
    gap: 20px;
    height: fit-content;
    padding: 15px;
    place-items: flex-start;
    flex-wrap: wrap;
}


.banner-mobile {
    display: none;
}

a {
    border: 1px solid white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
}

a:hover {
    background-color: white;
    color: black;
}

@media (max-width: 1000px) {

    .banner {
        justify-content: flex-start;
    }

    .banner-mobile p {
        color: white;
        text-align: center;
    }

}

.banner>p {
    color: white;
    letter-spacing: .5px;
    line-height: 1.8;
}
</style>
