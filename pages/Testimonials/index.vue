<template>
  <section class="mt-8 mb-5">
    <div class="center">
      <h2 class="mb-5">What clients & friends say.</h2>
    </div>
    <div class="testimonials-grid">
      <div class="testimonials-item glass glow" v-for="(item, index) in testimonials" :key="index">
        <img loading="lazy" class="mb-1" :src="item.image" />
        <h4 class="mb-1">{{ item.name }}</h4>
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
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonials-item {
  flex: 1;
  flex-basis: 250px;
  border-radius: var(--border-radius);
  padding: 15px;
  width: 100%;
  position: relative;
  border: .1px dashed rgba(255, 255, 255, 0.151);
  border: .1px solid transparent !important;
}

.testimonials-item:hover {
  border: .1px dashed var(--secondary) !important;
}

.testimonials-item img {
  height: 40px;
  width: 40px;
  padding: 2px;
  border: .5px dashed rgba(255, 255, 255, 0.373);
  border-radius: 50%;
  object-fit: cover;
}

.testimonials-item .company {
  color: var(--secondary);
  position: absolute;
  bottom: -10px;
  font-size: 12px;
}

.testimonials-item h1 {
  color: white;
}

.testimonials-item p {
  color: white;
  font-size: 12px;
  padding-bottom: 2em;
  line-height: 1.5;
}

</style>
