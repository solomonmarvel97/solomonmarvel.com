<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">Testimonials & Commendations</h1>
    </div>
    <div class="testimonials-grid">
      <div class="testimonials-item glow" v-for="(item, index) in testimonials" :key="index">
        <img class="mb-1" :src="item.image" />
        <h3 class="mb-1">{{ item.name }}</h3>
        <p class="mb-1">{{ item.text }}</p>
        <p class="company">{{ item.company }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonials } from "@/data/testimonials.js";

export default {
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
  gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.testimonials-item {
  height: auto;
  border-radius: var(--border-radius);
  padding: 30px;
  background: #151515;
  width: 100%;
  margin: 0 auto;
}

.testimonials-item img {
  height: 80px;
  width: 80px;
  padding: 4px;
  border: .5px solid rgba(255, 255, 255, 0.246);
  border-radius: 50%;
  object-fit: cover;
}

.testimonials-item .company {
  color: white;
  font-size: 12px;
}

.testimonials-item h1 {
  color: white;
}

.testimonials-item p {
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: white;
  margin-bottom: 1em;
}
</style>
