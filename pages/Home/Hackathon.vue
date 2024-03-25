<template>
    <div class="degree mt-3 mb-8">
        <div class="center">
            <h1 class="mb-3">Hackathons</h1>
        </div>
        <div>

            <div class="hackathon-grid">
                <HackathonComponent v-for="hackathon in hackathons" :link="hackathon.link"
                    :description="hackathon.description" :title="hackathon.title" :timeline="hackathon.timeline"
                    :image="hackathon.image" />
            </div>

        </div>
    </div>
</template>

<script>
import HackathonComponent from '@/components/HackathonComponent.vue';
import marvmagicfarm25 from '/images/hackathon/marvmagicfarm25.webp'
export default {
    data() {
        return {
            hackathons: [
                {
                    title: 'Marv-Magic X Farm25 Quick Build Hackathon',
                    description: 'Revolutionizing agriculture through a fusion of modern technology, artificial intelligence, and sustainable farming practices.',
                    timeline: 'April 19th - April 21st, 2024',
                    image: marvmagicfarm25,
                    link: 'https://mmqbhack.vercel.app/'
                },
            ]
        }
    },
    components: { HackathonComponent },
}
</script>

<style scoped>
.hackathon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 30px;
    align-items: center;
}

.hackathon-grid>div {}

.hackathon-grid::-webkit-scrollbar {
    color: transparent;
}

#arrowRight {
    display: none;
}

@media (max-width: 1000px) {
    .hackathon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        align-items: center;
    }
}
</style>