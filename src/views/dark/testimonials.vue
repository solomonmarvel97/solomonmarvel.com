<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">Testimonials/Commendations</h1>
    </div>
    <div class="testimonials-grid">
      <div
        class="testimonials-item"
        v-for="(item, index) in testimonials"
        :key="index"
      >
        <div>
          <img :src="item.image" />
          <h1>{{ item.name }}</h1>
          <p>{{ item.text }}</p>
          <p class="company">{{ item.company }}</p>
        </div>
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

<style scoped>
.testimonials-grid {
  display: grid;
  gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.testimonials-item {
  height: auto;
  border-radius: 15px;
  padding: 30px;
  background: white;
  width: 100%;
  margin: 0 auto;
}

.testimonials-item img {
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 15px;
}

.testimonials-item .company {
  color: rgb(99, 99, 99);
  font-size: 12px;
}

.testimonials-item h1 {
  color: #222;
}

.testimonials-item p {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #222;
  margin-bottom: 1em;
}

h1 {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: white;
  font-weight: bold;
}

a {
  font-weight: bold;
  font-size: 14px;
  color: rgb(172, 172, 172);
}
</style>
