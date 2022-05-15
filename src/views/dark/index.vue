<template>
  <body>
    <section>
      <Hero />
      <Stack />
      <Portfolio />
      <Testimonials />
      <Footer/>
    </section>
  </body>
</template>

<script>
import Hero from "./hero.vue";
import Stack from "./stack.vue";
import Portfolio from "./portfolio.vue";
import Testimonials from "./testimonials.vue";
import Footer from "./footer.vue";

export default {
  components: {
    Hero,
    Stack,
    Portfolio,
    Testimonials,
    Footer
  },
};
</script>

<style scoped>
body {
  width: 100%;
  background: linear-gradient(145deg, #1a1a1a 2%, #000 98%) !important;
  padding-top: 3em;
  padding-bottom: 3em;
  z-index: 0;
  position: relative;
}
</style>
