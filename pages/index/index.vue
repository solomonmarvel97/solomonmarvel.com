<template>
    <div>
      <Hero />
      <Services/>
      <Achievments />
      <Badge />
    </div>
  </template>
  
  <script>
  import Hero from "./Hero.vue";
  import Services from './Services.vue'
  import Achievments from "./Achievments.vue";
import Badge from "~/components/Badge.vue";
  
  export default {
    layout: 'web',
    components: {
    Hero,
    Services,
    Achievments,
    Badge
},
  };
  </script>
  
  <style scoped>
  </style>
  