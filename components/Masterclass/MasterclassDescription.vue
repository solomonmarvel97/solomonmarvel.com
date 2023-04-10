<template>
    <div class="service glass">
        <p class="title">{{Title}}</p>
        <p class="description mb-1">
            {{Description}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        Title: String,
        Description: String
    }
}
</script>

<style scoped>
.service {
    display: grid;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.222);
    padding: 20px;
    max-width: 100%;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}
.service .tag {
    background-color: white;
    display: inline-block;
    color: black;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: var(--border-radius);
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

@media (max-width: 1000px) {
    .service {
    display: grid;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.222);
    padding: 15px;
    max-width: 150px;
    border-radius: var(--input-border-radius) !important;
    position: relative;
}
.service img {
    height: 30px;
    width: 30px;
    object-fit: contain;
    border: none;
    filter: invert();
}

.service .title {
    color:#ffffffda;
    font-size: 14px;
    line-height: 1.4
}
.service .description {
    color:#ffffffb0;
    font-size: 12px;
    line-height: 1.5
}
}

</style>