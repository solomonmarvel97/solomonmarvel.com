<template>
  <div>
    <Hero />
    <Workshops/>
    <Twitter/>
    <Hackathon/>
    <Who />
    <Services />
    <Portfolio/>
    <Events />
    <Product />
    <Achievments />
  </div>
</template>

<script>
import Hero from "./Home/Hero.vue";
import Twitter from "./Home/Twitter.vue";
import Hackathon from "./Home/Hackathon.vue";
import Workshops from "./Home/Workshops.vue";
import Who from "./Home/Who.vue";
import Services from './Home/Services.vue'
import Portfolio from './Home/Portfolio.vue'
import Product from "./Home/Product.vue"
import Achievments from "./Home/Achievments.vue";
import Events from "./Home/Events.vue";

export default {
  layout: 'default',
  components: {
    Hero,
    Twitter,
    Hackathon,
    Workshops,
    Who,
    Services,
    Portfolio,
    Events,
    Product,
    Achievments
  },
};
</script>

<style scoped>

</style>
