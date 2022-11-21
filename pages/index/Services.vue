<template>
    <section>
        <div class="service-grid">
            <Services v-for="(i, index) in services" :key="index" :image="i.image" :title="i.title"/>
        </div>
    </section>
</template>

<script>
import Services from '../../components/Services.vue';

const services = [
    {
        image: require(`@/assets/icons/services/agile.svg`),
        title: 'Agile Development Consulting',
    },
    {
        image: require(`@/assets/icons/services/software.svg`),
        title: 'Software Architecture',
    },
    {
        image: require(`@/assets/icons/services/cloud.svg`),
        title: 'Cloud Engineering & Management',
    },
    {
        image: require(`@/assets/icons/services/workflow.svg`),
        title: 'Workflow Development',
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

.service-grid > div {
    flex: 1;
}
</style>