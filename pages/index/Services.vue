<template>
    <section>
        <div class="service-grid">
            <Services v-for="(i, index) in services" :key="index" :image="i.image" :title="i.title" :description="i.description"/>
        </div>
    </section>
</template>

<script>
import Services from '../../components/Services.vue';

const services = [
    {
        image: require(`@/assets/icons/services/agile.svg`),
        title: 'Agile Development Consulting',
        description: 'Get a single, complete platform for the entire software development pipeline and team collaboration.'
    },
    {
        image: require(`@/assets/icons/services/software.svg`),
        title: 'Software Architecture',
        description: 'Get a single, complete platform for the entire software development pipeline and team collaboration.'
    },
    {
        image: require(`@/assets/icons/services/cloud.svg`),
        title: 'Cloud Engineering & Management',
        description: 'Get a single, complete platform for the entire software development pipeline and team collaboration.'
    },
    {
        image: require(`@/assets/icons/services/workflow.svg`),
        title: 'Workflow Development',
        description: 'Get a single, complete platform for the entire software development pipeline and team collaboration.'
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
.service-grid {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 5em;
}
</style>