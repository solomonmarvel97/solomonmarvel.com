<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">My Portfolio</h1>
    </div>
    <div class="portfolio-grid">
      <div
        class="portfolio-item"
        v-for="(item, index) in portfolio"
        :key="index"
      >
        <div>
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
.portfolio-grid {
  display: grid;
  place-items: center;
  gap: 25px;
  row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.portfolio-item {
  display: grid;
  align-items: center;
  width: 100%;
  height: auto;
  opacity: 0.99;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.034);
  background: rgba(24, 24, 24, 0.231);
}

p {
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: white;
}

h1 {
  font-size: 18px;
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
