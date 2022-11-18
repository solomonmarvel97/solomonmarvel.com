<template>
    <div class="consulting">
        <section class="mt-6">
            <h1 class="mb-2">Consulting Service</h1>
            <p>Hello 👋🏾, let's create a solution to that problem</p>
            <div class="consulting-grid mt-5">
                <div class="glass">
                    <img loading="lazy" class="mb-2" src="@/assets/images/consulting1.png"/>
                    <div class="details">
                        <h2 class="mb-1">30 minutes session</h2>
                        <h1 class="mb-1">$50</h1>
                        
                        <div class="item mb-2" v-for="(i, index) in plan1" :key="index">
                            <img loading="lazy" src="@/assets/icons/check.svg"/>
                            <p>{{i.item}}</p>
                        </div>

                        <a class="mt-4 button-primary" target="_blank" href="https://buy.stripe.com/8wM03C0aC91t2Sk28b">Book Session</a>
                    </div>
            </div>
            <div class="glass">
                <img loading="lazy" class="mb-2" src="@/assets/images/consulting2.png"/>
                <div class="details">
                    <h2 class="mb-1">1 hour session</h2>
                    <h1 class="mb-1">$100</h1>
                    <div class="item mb-2" v-for="(i, index) in plan2" :key="index">
                            <img loading="lazy" src="@/assets/icons/check.svg"/>
                            <p>{{i.item}}</p>
                        </div>
                    <a class="mt-4 button-primary" target="_blank" href="https://buy.stripe.com/28o9Ec3mOdhJ78AcMQ">Book Session</a>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
const plan1 = [
    {
        item: "Software engineering"
    },
    {
        item: "Microservices & Distributed Systems"
    },
    {
        item: "Systems Design"
    }
]

const plan2 = [
{
        item: "IT Strategies"
    },
    {
        item: "Microservices & Distributed Systems"
    },
    {
        item: "Software Architecture & Systems Design"
    },
    {
        item: "Cloud & Edge Computing"
    },
    {
        item: "Serverless Computing"
    },
    {
        item: "Team Topologies"
    }
]
export default {
    layout: 'web',
    data() {
        return {
            plan1,
            plan2
        }
    }
}
</script>

<style scoped>
.consulting {
    display: grid;
}

.consulting .consulting-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
}

.consulting .consulting-grid div {
    flex: 1;
    place-items: center;
    width: 100%;
    border-radius: var(--input-border-radius) !important;
}

.consulting .consulting-grid .details {
    padding: 40px;
}

.consulting .consulting-grid img {
    height: 200px;
    object-fit: cover;
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
}

.details .item {
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: flex-start;
}

.details .item img {
    width: 15px;
    height: 15px;
    object-fit: cover;
}

</style>