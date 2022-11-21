<template>
    <div class="mt-5">
        <section>
            <div class="masterclass-heading mb-5">
                    <h1>Premium Masterclass</h1>
            </div>

            <div>
                <div class="service-grid mb-5" v-for="(i, index) in masterclasses" :key="index">
                    <MasterclassComponent :image="i.image" :dateTime="i.dateTime" :title="i.title"
                        :description="i.description" :link="i.link" />
                    <div class="service-grid-child">
                        <MasterclassDescription v-for="(a, index) in i.details" :key="index" :Title="a.title"
                            :Description="a.description" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import MasterclassComponent from '../../components/Masterclass/MasterclassComponent.vue';
import MasterclassDescription from '../../components/Masterclass/MasterclassDescription.vue';
import {masterclasses} from '@/data/masterclasses.js'
export default {
    layout: 'web',
    data() {
        return {
            masterclasses
        }
    },
    components: { MasterclassComponent, MasterclassDescription }
}
</script>

<style scoped>
.service-grid {
    gap: 20px;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
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
        justify-content: center;
        align-items: flex-start;
    }
}

.service-grid-child {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    align-items: flex-start;
}

@media (max-width: 1000px) {
    .service-grid-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
}

.masterclass-heading {
    height: 350px;
    width: 100%;
    border-radius: var(--input-border-radius);
    background-color: rgba(255, 255, 255, 0.059);
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(159.94deg, rgba(0, 0, 0, 0.7) 5.35%, rgba(0, 0, 0, 0.7) 86.63%), url('https://media.datacenterdynamics.com/media/images/Digital_Ocean.original.jpg');
    background-position: center;
    background-size: cover;
}
</style>