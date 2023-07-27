<template>
    <div class="consulting">
        <section class="mt-6">
            <h1 class="mb-2">Consulting Plans</h1>

            <p>Hello 👋🏾, let's create a solution together</p>

            <div class="consulting-grid mt-5">
                <a target="_blank" href="https://buy.stripe.com/8wM03C0aC91t2Sk28b">
                    <div>
                        <div class="details glass glow">
                            <h2 class="mb-1">Career Sessions/Brain storming & IT/Engineering Session (1hr)</h2>
                            <h1 class="mb-2">$50</h1>
                            <div class="item mb-2" v-for="(i, index) in plan1" :key="index">
                                <img loading="lazy" src="@/assets/icons/check.svg" />
                                <p>{{ i.item }}</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://paystack.com/pay/uxd35869rz">
                    <div>
                        <div class="details glass glow">
                            <h2 class="mb-1">IT Brainstorming Session For Nigerian Founders & Tech Leads (1hr) </h2>
                            <h1 class="mb-2">&#8358;30,000</h1>
                            <div class="item mb-2" v-for="(i, index) in plan2" :key="index">
                                <img loading="lazy" src="@/assets/icons/check.svg" />
                                <p>{{ i.item }}</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a target="_blank" href="https://buy.stripe.com/28o9Ec3mOdhJ78AcMQ">
                    <div>
                        <div class="details glass glow">
                            <h2 class="mb-1">IT Strategies, Team Topologies & Modern Infrastructures (2hrs)</h2>
                            <h1 class="mb-2">$100</h1>
                            <div class="item mb-2" v-for="(i, index) in plan3" :key="index">
                                <img loading="lazy" src="@/assets/icons/check.svg" />
                                <p>{{ i.item }}</p>
                            </div>
                        </div>
                    </div>
                </a>
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
    },
    {
        item: "Software Architecture"
    }
]

const plan2 = [
    {
        item: "Product Discovery"
    },
    {
        item: "IT Strategy"
    },
    {
        item: "Engineering Best Practices"
    },
    {
        item: "Team Topologies"
    }
]

const plan3 = [
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
            plan2,
            plan3,
        }
    }
}
</script>

<style scoped>
.consulting {
    padding-top: 4em
}

.consulting .consulting-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    gap: 50px;
    position: relative;
    height: 100%;
}

.consulting .consulting-grid>div {
    width: 100%;
    height: 100%;
    border-radius: var(--input-border-radius) !important;
}

.consulting .consulting-grid> a {
    width: 100%;
    height: 100%;
    border-radius: var(--input-border-radius) !important;
}

.consulting .consulting-grid .details {
    padding: 20px;
    position: relative;
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
