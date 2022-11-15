<template>
  <section class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-5">Work Testimonials</h1>
    </div>
    <div class="testimonials-grid">
      <div class="testimonials-item glow" v-for="(item, index) in testimonials" :key="index">
        <img class="mb-1" :src="item.image" />
        <h3 class="mb-1">{{ item.name }}</h3>
        <p class="mb-1">{{ item.text }}</p>
        <p class="company">{{ item.company }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonials } from '@/data/testimonials.js';
export default {
  layout: 'web',
  data() {
    return {
      testimonials: testimonials,
    };
  },
};
</script>

<style>
.testimonials-grid {
  display: grid;
  gap: 30px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.testimonials-item {
  border-radius: var(--border-radius);
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: rgba(255, 255, 255, 0.034);
}

.testimonials-item img {
  height: 80px;
  width: 80px;
  padding: 4px;
  border: .5px solid rgba(255, 255, 255, 0.165);
  border-radius: 50%;
  object-fit: cover;
}

.testimonials-item .company {
  color: white;
  font-size: 14px;
}

.testimonials-item h1 {
  color: white;
}

.testimonials-item p {
  color: white;
  font-size: 14px;
  line-height: 1.5;
}

</style>
