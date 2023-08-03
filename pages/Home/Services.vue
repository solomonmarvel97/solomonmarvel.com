<template>
    <div class="services mt-5">
        <section>
            <h1 class="mb-4">My Services</h1>
            <div class="service-grid">
                <ServicesComponent v-for="(i, index) in services" :key="index" :title="i.title" />
            </div>
        </section>
    </div>
</template>

<script>

export default {
    data() {
        return {
            services: [
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
        }
    },
    methods: {},
}
</script>

<style scoped>
.services {
    display: grid;
    place-items: center;
    height: auto;
    padding: 4em 0;
    border-bottom: .1px dashed var(--secondary);
}

.service-grid {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>
