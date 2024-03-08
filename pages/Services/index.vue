<template>
    <section class="mt-5">
        <div class="center">
            <h1 class="mb-3">Services</h1>
        </div>
        <div class="service-grid">
            <ServicesComponent v-for="(i, index) in services" :key="index" :image="i.image" :title="i.title" />
        </div>
    </section>
</template>

<script>
import agile from "@/assets/icons/services/agile.svg"
import software from "@/assets/icons/services/software.svg"
import cloud from "@/assets/icons/services/cloud.svg"
import workflow from "@/assets/icons/services/workflow.svg"

export default {
    layout: 'web',
    data() {
        return {
            services: [
                {
                    image: agile,
                    title: 'Agile Development Consulting',
                },
                {
                    image: software,
                    title: 'Software Architecture',
                },
                {
                    image: cloud,
                    title: 'Cloud Engineering & Management',
                },
                {
                    image: workflow,
                    title: 'Workflow Development',
                },

            ]
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

.service-grid>div {
    flex: 1;
}
</style>
