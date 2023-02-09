<template>
    <div class="services mt-5">
        <section>
            <h1 class="mb-4">Wanna know <span>what i do?</span></h1>
            <div class="service-grid">
                <Services v-for="(i, index) in services" :key="index" :title="i.title"/>
            </div>
        </section>
    </div>
</template>

<script>
import Services from '../../components/Services.vue';

const services = [
    {
        title: 'Systems Design',
    },    
    {
        title: 'Agile Consulting',
    },
    {
        title: 'Software Architecting',
    },
    {
        title: 'Cloud Engineering',
    },
    {
        title: 'AWS',
    },    
    {
        title: 'API Design',
    },
    {
        title: 'Code Migration',
    },
    {
        title: 'Cloud Consulting',
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
    height: 100vh;
    border-bottom: .5px solid var(--primary);
    background-color: black;
}
.service-grid {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 2em;
}
</style>