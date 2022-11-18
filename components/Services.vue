<template>
    <div class="service glow glass">
        <img loading="lazy" class="mb-1" :src="image"/>
        <p class="title mb-1">{{title}}</p>
        <p class="description mb-1">
            {{description}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        description: String
    }
}
</script>

<style scoped>
.service {
    display: grid;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.222);
    padding: 20px;
    
    min-height: 300px;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}
.service .tag {
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 50px;
}
.service img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    border: none;
    filter: invert();
}

.service .title {
    color:#ffffffda;
    font-size: 20px;
    line-height: 1.4
}
.service .description {
    color:#ffffffb0;
    font-size: 14px;
    line-height: 1.5
}

.service .button {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 10px 20px;
    display: inline-block;
    border-radius: var(--border-radius);
    place-items: center;
}

</style>