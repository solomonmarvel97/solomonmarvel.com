<template>
  <div class="mt-8 mb-5">
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
  gap: 25px;
  row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.testimonials-item {
  align-items: center;
  width: 100%;
  height: auto;
  opacity: 0.99;
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  background: white;
}

.testimonials-item img {
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 50%;  
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
