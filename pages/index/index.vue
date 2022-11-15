<template>
    <div>
      <Hero />
      <Services/>
      <Achievments />
    </div>
  </template>
  
  <script>
  import Hero from "./Hero.vue";
  import Services from './Services.vue'
  import Achievments from "./Achievments.vue";
  
  export default {
    layout: 'web',
    components: {
      Hero,
      Services,
      Achievments,
    },
  };
  </script>
  
  <style scoped>
  </style>
  