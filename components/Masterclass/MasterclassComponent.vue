<template>
    <div class="masterclass glow glass">
        <img class="mb-1" loading="lazy" :src="image"/>
        <div class="details">
        <p class="tag mb-2">Duration</p>
        <p class="dateTime mb-1">{{dateTime}}</p>
        <p class="title mb-1">{{title}}</p>
        <p class="description mb-3">
            {{description}}
        </p>
        <a :href="link" target="_blank" class="button-primary">Join Masterclass</a>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        dateTime: String,
        title: String,
        description: String,
        link: String,
    }
}
</script>

<style scoped>
.masterclass {
    display: grid;
    gap: 10px;
    min-width: 300px;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}

.masterclass .tag {
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 10px;
    padding: 3px 10px;
    border-radius: var(--border-radius);
}
.masterclass img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border: none;
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

.masterclass .details {
    padding: 0 25px 25px 25px
}

.masterclass span {
    font-size: 12px;
    color: rgb(237, 237, 237);
}

.masterclass .dateTime {
    font-size: 14px;
    color: rgb(122, 255, 226);
}

.masterclass .title {
    color:#ffffffda;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px
}
.masterclass .description {
    color:#ffffffb0;
    font-size: 16px;
    line-height: 1.5
}

</style>