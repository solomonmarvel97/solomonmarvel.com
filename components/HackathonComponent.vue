<template>
    <main>
        <NuxtLink :to="link" target="_blank" class="hackathon">
            <div class="glow hackathon-content">
                <img loading="lazy" :src="image" />
                <div class="content">
                        <h2 class="mb-1">{{ title }}</h2>
                        <p class="mb-2 school">{{ description }}</p>
                        <p class="timeline">{{ timeline }}</p>
                </div>
            </div>
        </NuxtLink>
    </main>
</template>

<script>

export default {
    props: {
        link: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        timeline: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped>
.hackathon {
    position: relative;
}

.hackathon-content {
    height: auto;
    width: 100%;
    border-radius: 8px;
    background-color: rgba(52, 52, 52, 0.3);
    position: relative;
    z-index: 1;

}

.hackathon-content p {
    font-size: 14px;
    color: white;
}

.hackathon-content img {
    height: 200px !important;
    border-radius: 4px;
    width: 100%;
    background-color: rgb(235, 235, 235);
}

.hackathon-content h2 {
    color: white;
}

.hackathon-content .timeline {
    font-size: 12px !important;
    color: black;
    padding: 4px 16px;
    border-radius: 4px;
    background-color: rgb(243, 243, 243);
    display: inline-flex;
}

.hackathon-content .content .icon {
    height: 40px;
    width: 40px;
}

.hackathon-content .content {
    padding: 16px;
}

.hackathon-content img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
}
</style>