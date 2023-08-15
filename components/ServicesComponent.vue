<template>
    <div class="service">
        <p class="title">{{title}}</p>
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
    display: flex;
    border-radius: var(--border-radius) !important;
    position: relative;
    padding: 20px 20px;
    background-color: rgb(28, 28, 28);
}

.service:hover {
    background-color: rgb(55, 55, 55);
}


.service .title {
    font-size: 14px;
}
.service .button {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 5px 10px;
    display: inline-block;
    border-radius: var(--border-radius);
    place-items: center;
}

@media (max-width: 1000px) {
    .service {
        padding: 10px 10px
    }
}

</style>
