<template>
    <div class="hero">
        <section>
            <div class="header mb-5">
                <h2 class="center">Software Engineering Hands-on Mentorship Program</h2>
                <p class="subtitle">Empowering engineers to build scalable, efficient, and modern software systems.</p>
            </div>

            <div class="mentoring-container">
                <div class="service-grid" v-for="(item, index) in mentoring" :key="index">
                    <MentoringComponent 
                        :image="item.image" 
                        :title="item.title" 
                        :description="item.description" 
                        :link="item.link" 
                    />
                    <div class="details-grid">
                        <MentoringDescription 
                            v-for="(detail, detailIndex) in item.details" 
                            :key="detailIndex" 
                            :title="detail.title" 
                            :description="detail.description" 
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import MentoringComponent from '@/components/MentoringComponent.vue';
import MentoringDescription from '@/components/MentoringDescription.vue';
import { mentoring } from '@/data/mentoring.js';

export default {
    layout: 'web',
    data() {
        return {
            mentoring,
        };
    },
    components: { MentoringComponent, MentoringDescription },
};
</script>

<style scoped>
.hero {
    padding-top: 6em;
    padding-bottom: 4em;
    background-color: var(--background);
}

.header {
    text-align: center;
    margin-bottom: 3em;
}

.header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5em;
}

.header .subtitle {
    font-size: 1.2rem;
    color: var(--secondary);
    max-width: 800px;
    margin: 0 auto;
}

.mentoring-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.service-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 40px;
    align-items: flex-start;
    margin-bottom: 4em;
    padding-bottom: 3em;
    border-bottom: 1px dashed var(--secondary);
}

@media (max-width: 1000px) {
    .service-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

@media (max-width: 768px) {
    .details-grid {
        grid-template-columns: 1fr;
    }
}

.center {
    text-align: center;
}

.mb-5 {
    margin-bottom: 3em;
}
</style>