<template>
    <main>
        <div class="service-grid">
            <MasterclassDescription v-for="(i, index) in services" :key="index" :title="i.title" :description="i.description"/>
        </div>
    </main>
</template>

<script>
import MasterclassDescription from './MasterclassDescription.vue';

const services = [
    {
        title: 'API Design',
        description: 'Understand the planning processes and architectural decisions you make when building an API'
    },
    {
        title: 'API Collaboration',
        description: 'Learn how testers, architects, and other stakeholders work together to build and consume APIs'
    },
    {
        title: 'API Management',
        description: 'Learn best practices in building and managing APIs that can scale across teams and organisations.'
    },
    {
        title: 'API Documentation',
        description: 'Learn technical writing, giving instructions on how to effectively use and integrate with an API'
    },
    {
        title: 'API Deployment',
        description: 'Understand modern patterns & best practices when deploying internal or external APIs in the cloud'
    },
    {
        title: 'API Governance',
        description: 'Learn how to apply common rules and guardrails relating to API standards and security policies to your APIs'
    },

]
export default {
    layout: 'web',
    data() {
        return {
            services: services
        }
    },
    methods: {},
    components: { MasterclassDescription }
}
</script>

<style scoped>
.service-grid {
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    place-items: center;
}
</style>