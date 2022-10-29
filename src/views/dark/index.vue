<template>
  <body>
    <Navigation />
    <Hero2 />
    <section>
      <Achievments />
      <Portfolio />
      <Testimonials />
      <Footer />
    </section>
  </body>
</template>

<script>
import Navigation from "./Navigation.vue";
import Hero2 from "./Hero2.vue";
import Portfolio from "./portfolio.vue";
import Testimonials from "./testimonials.vue";
import Footer from "./footer.vue";
import Achievments from "./achievments.vue";

export default {
  components: {
    Navigation,
    Hero2,
    Portfolio,
    Testimonials,
    Achievments,
    Footer,
  },
};
</script>

<style scoped>
</style>
