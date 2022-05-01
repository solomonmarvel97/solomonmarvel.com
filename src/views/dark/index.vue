<template>
  <body>
    <section>
      <Hero />
      <Stack />
      <Portfolio />
    </section>
  </body>
</template>

<script>
import Hero from "./hero.vue";
import Stack from "./stack.vue";
import Portfolio from "./portfolio.vue";

export default {
  components: {
    Hero,
    Stack,
    Portfolio,
  },
};
</script>

<style scoped>
body {
  width: 100%;
  background: linear-gradient(145deg, #1a1a1a 2%, #000 98%) !important;
  padding-top: 3em;
  padding-bottom: 3em;
}
</style>
