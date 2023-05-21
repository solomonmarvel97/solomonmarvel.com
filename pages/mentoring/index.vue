<template>
    <div class="mt-5">
        <section>
            <div class="mb-5">
                    <h2 class="center">Free & Open Mentoring Session</h2>
            </div>

            <div>
                <div class="service-grid mb-5" v-for="(i, index) in mentoring" :key="index">
                    <MentoringComponent :image="i.image" :dateTime="i.dateTime" :title="i.title"
                        :description="i.description" :link="i.link" />
                    <div class="service-grid-child">
                        <MentoringDescription v-for="(a, index) in i.details" :key="index" :Title="a.title"
                            :Description="a.description" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import MentoringComponent from '@/components/MentoringComponent.vue';
import MentoringDescription from '@/components/MentoringDescription.vue';
import {mentoring} from '@/data/mentoring.js'
export default {
    layout: 'web',
    data() {
        return {
            mentoring
        }
    },
    components: { MentoringComponent, MentoringDescription }
}
</script>

<style scoped>
.service-grid {
    gap: 30px;
    display: grid;
    grid-template-columns: 40% 60%;
    place-items: center;
    align-items: flex-start;
    padding-bottom: 3em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.095);
}

@media (max-width: 1000px) {
    .service-grid {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}

.service-grid-child {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

@media (max-width: 1000px) {
    .service-grid-child {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}
</style>