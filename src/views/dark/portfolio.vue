<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">My Work</h1>
    </div>
    <div class="portfolio-grid">
      <div class="portfolio-item" v-for="(item, index) in portfolio" :key="index">
        <div>
          <h1 class="icon mb-1">{{ item.icon }}</h1>
          <p class="mb-1">{{ item.position }}</p>
          <h1 class="mb-1">{{ item.platform }}</h1>
          <a target="blank" :href="item.link">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolio } from "@/data/portfolio.js";

export default {
  data() {
    return {
      portfolio: portfolio,
    };
  },
};
</script>

<style scoped>
.icon {
  font-size: 25px;
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.portfolio-item {
  align-items: center;
  flex-basis: 350px;
  height: auto;
  opacity: 0.99;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  background: #53535329;
  border: 1px solid rgba(22, 22, 22, 0.456)
}

@media (max-width: 768px) {
  .portfolio-item {
    flex-basis: 150px;
  }
}

p {
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: white;
}

h1 {
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: white;
}

a {
  font-size: 12px;
  color: rgb(172, 172, 172);
}
</style>
