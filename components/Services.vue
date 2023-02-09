<template>
    <div class="service glass">
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
    display: grid;
    border: 1px solid rgba(255, 255, 255, 0.222);
    border-radius: var(--input-border-radius) !important;
    position: relative;
    padding: 20px 30px;
}

.service .title {
    color:#ffffffda;
    font-size: 18px;
}
.service .button {
    background-color: rgba(255, 255, 255, 0.049);
    padding: 10px 20px;
    display: inline-block;
    border-radius: var(--border-radius);
    place-items: center;
}

</style>