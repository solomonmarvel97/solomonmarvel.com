<template>
    <div class="service glass">
        <p class="title"> ✓ {{ Title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        Title: String,
    }
}
</script>

<style scoped>
.service {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px 15px;
    border-radius: var(--input-border-radius) !important;
    align-items: start;
}

.service .title {
    color: #ffffffda;
    font-size: 14px;
    line-height: 1.4;
}

@media (max-width: 1000px) {

    .service .title {
        color: #ffffffda;
        font-size: 14px;
        line-height: 1.4
    }
}
</style>