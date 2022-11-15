<template>
    <div class="mt-5">
    <section>
        <div class="center">
            <h1 class="mb-3">Masterclass</h1>
        </div>
        <div class="service-grid">
            <MasterclassComponent v-for="(i, index) in masterclass" :key="index" :image="i.image" :dateTime="i.dateTime" :title="i.title" :description="i.description"/>
        </div>
    </section>
</div>
</template>

<script>
import MasterclassComponent from '../../components/Courses/MasterclassComponent.vue';

const masterclass = [
    {
        image: require(`@/assets/images/masterclass/API.png`),
        dateTime: `18th Nov, 2022 - 2hrs/day - Three (3) days`,
        title: 'Premium API Design Workshop',
        description: 'Learn how to design complex APIs that are easy to use. We will build a referral system using nodejs, postman, stoplight & other aws services'
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
    components: { MasterclassComponent }
}
</script>

<style scoped>
.service-grid {
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    place-items: center;
}
</style>