<template>
  <section class="mt-8 mb-5">
    <div class="center">
      <h2 class="mb-5">Some feedbacks</h2>
    </div>
    <div class="testimonials-grid">
      <div class="testimonials-item glow" v-for="(item, index) in testimonials" :key="index">
        <img loading="lazy" class="mb-1" :src="item.image" />
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
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonials-item {
  flex: 1;
  flex-basis: 350px;
  border-radius: var(--border-radius);
  padding: 20px;
  width: 100%;
  position: relative;
}

.testimonials-item img {
  height: 60px;
  width: 60px;
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
