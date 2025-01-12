<template>
    <div class="service glass">
        <p class="title"> ✓ {{ title }}</p>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    }
}
</script>

<style scoped>
.service {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: var(--input-border-radius);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service .title {
    color: #ffffffda;
    font-size: 16px;
    line-height: 1.4;
}

.service .description {
    color: #ffffffb0;
    font-size: 14px;
    line-height: 1.5;
}
</style>