<template>
  <div>
    <Hero />
    <Who />
    <Services />
    <Products />
    <Achievments />
    <Badge />
  </div>
</template>
  
<script>
import Hero from "./Hero.vue";
import Who from "./Who.vue";
import Services from './Services.vue'
import Products from "./Products.vue"
import Achievments from "./Achievments.vue";
import Badge from "~/components/Badge.vue";

export default {
  layout: 'web',
  components: {
    Hero,
    Who,
    Services,
    Products,
    Achievments,
    Badge
  },
};
</script>
  
<style scoped>

</style>
  