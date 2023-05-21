<template>
    <div class="mentoring glow glass">
        <img class="mb-1" loading="lazy" :src="image"/>
        <div class="details">
        <p class="title mb-1">{{title}}</p>
        <p class="description mb-3">
            {{description}}
        </p>
        <a :href="link" target="_blank" class="button-primary">Join Mentoring Group</a>
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
.mentoring {
    display: grid;
    gap: 10px;
    min-width: 300px;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}

.mentoring .tag {
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 10px;
    padding: 3px 10px;
    border-radius: var(--border-radius);
}
.mentoring img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border: none;
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

.mentoring .details {
    padding: 0 25px 25px 25px
}

.mentoring span {
    font-size: 12px;
    color: rgb(237, 237, 237);
}

.mentoring .dateTime {
    font-size: 14px;
    color: rgb(122, 255, 226);
}

.mentoring .title {
    color:#ffffffda;
    font-size: 18px;
    line-height: 1.3
}
.mentoring .description {
    color:#ffffffb0;
    font-size: 14px;
    line-height: 1.5
}

</style>