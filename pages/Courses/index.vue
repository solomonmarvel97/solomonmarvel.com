<template>
    <div class="mt-5">
    <section>
        <div class="center">
            <h1 class="mb-3">Masterclass</h1>
        </div>
        <div class="service-grid">
            <MasterclassComponent v-for="(i, index) in masterclass" 
                    :key="index" 
                    :image="i.image" 
                    :dateTime="i.dateTime" 
                    :title="i.title" 
                    :description="i.description"
                    :link="i.link"/>
            <div>
                <MasterclassPopulate/>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import MasterclassComponent from '../../components/Courses/MasterclassComponent.vue';
import MasterclassPopulate from '../../components/Courses/MasterclassPopulate.vue';

const masterclass = [
    {
        image: require(`@/assets/images/masterclass/API.png`),
        dateTime: `18th Nov, 2022 - 2hrs/day - Three (3) days`,
        title: 'Premium API Design Workshop',
        description: 'Learn how to design complex APIs that are easy to use. We will build a referral system using nodejs, postman, stoplight & other aws services',
        link: "https://bit.ly/premiumAPI"
    },
]
export default {
    layout: 'web',
    data() {
        return {
            masterclass
        }
    },
    methods: {},
    components: { MasterclassComponent, MasterclassPopulate }
}
</script>

<style scoped>
.service-grid {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    align-items: center;
}

@media (max-width: 1000px) {
    .service-grid {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>