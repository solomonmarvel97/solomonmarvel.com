<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">My Work</h1>
    </div>
    <div class="portfolio-grid">
      <div
        class="portfolio-item"
        v-for="(item, index) in portfolio"
        :key="index"
      >
        <div>
          <h1 class="icon">{{item.icon}}</h1>
          <p>{{ item.position }}</p>
          <h1>{{ item.platform }}</h1>
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
  gap: 25px;
}

.portfolio-item {
  display: grid;
  align-items: center;
  flex-basis: 300px;
  height: auto;
  opacity: 0.99;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.034);
  background: rgba(114, 114, 114, 0.231);
}

p {
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: white;
}

h1 {
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: white;
  font-weight: 300;
}

a {
  font-weight: 300;
  font-size: 14px;
  color: rgb(172, 172, 172);
}
</style>
