<template>
    <div class="masterclass  glass">
        <img :src="image"/>
        <div class="details">
        <p class="tag mb-1">Date & Duration</p>
        <p class="dateTime mb-2">{{dateTime}}</p>
        <p class="title mb-1">{{title}}</p>
        <p class="description mb-3">
            {{description}}
        </p>
        <div>
            <a :href="link" target="_blank" class="button-primary">Join Masterclass</a>
        </div>
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
    gap: 5px;
    border: 1px solid rgba(255, 255, 255, 0.222);
    min-width: 300px;
    min-height: 300px;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}

.masterclass .tag {
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 10px;
    padding: 3px 10px;
    border-radius: 50px;
}
.masterclass img {
    height: 220px;
    width: 100%;
    object-fit: cover;
    border: none;
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

.masterclass .details {
    padding: 20px
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

.masterclass .button {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 10px 20px;
    display: inline-block;
    border-radius: var(--border-radius);
    place-items: center;
}

</style>