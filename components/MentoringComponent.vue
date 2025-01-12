<template>
    <div class="mentoring glow glass">
        <img class="mb-1" loading="lazy" :src="image" alt="Mentoring Program Image"/>
        <div class="details">
            <p class="title mb-1">{{ title }}</p>
            <p class="description mb-3">
                {{ description }}
            </p>
            <a :href="link" target="_blank" class="button-primary">Join Mentoring Group</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
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
    border-radius: var(--input-border-radius);
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mentoring:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.mentoring img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border: none;
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

.mentoring .details {
    padding: 0 25px 25px 25px;
}

.mentoring .title {
    color: #ffffffda;
    font-size: 18px;
    line-height: 1.3;
}

.mentoring .description {
    color: #ffffffb0;
    font-size: 14px;
    line-height: 1.5;
}

.button-primary {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: var(--input-border-radius);
    transition: background-color 0.3s ease;
}

.button-primary:hover {
    background-color: var(--primary-dark);
}
</style>