<template>
    <div class="services mt-5">
        <section>
            <h1 class="mb-4">My Services</h1>
            <div class="service-grid">
                <Services v-for="(i, index) in services" :key="index" :title="i.title" />
            </div>
        </section>
    </div>
</template>

<script>
import Services from '../../components/Services.vue';

const services = [
    {
        title: 'Product Development',
    },
    {
        title: 'Systems Design',
    },
    {
        title: 'Generative AI Development',
    },
    {
        title: 'AI & ML Development',
    },
    {
        title: 'Prompt Engineering',
    },
    {
        title: 'Agile Consulting',
    },
    {
        title: 'Software Architecting',
    },
    {
        title: 'Cloud Service Consulting',
    },
    {
        title: 'API Development & Design',
    },
    {
        title: 'Legacy Code Migration',
    },
    {
        title: 'Workflow Design',
    },

]
export default {
    data() {
        return {
            services: services
        }
    },
    methods: {},
    components: { Services }
}
</script>

<style scoped>
.services {
    display: grid;
    place-items: center;
    height: auto;
    padding: 4em 0;
    border-bottom: .5px solid var(--primary);
}

.service-grid {
    gap: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>