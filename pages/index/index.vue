<template>
  <div>
    <Hero />
    <Who />
    <Services />
    <Product />
    <Achievments />
    <Badge />
  </div>
</template>
  
<script>
import Hero from "./Hero.vue";
import Who from "./Who.vue";
import Services from './Services.vue'
import Product from "./Product.vue"
import Achievments from "./Achievments.vue";
import Badge from "~/components/Badge.vue";

export default {
  layout: 'web',
  components: {
    Hero,
    Who,
    Services,
    Product,
    Achievments,
    Badge
  },
};
</script>
  
<style scoped>

</style>
  