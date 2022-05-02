<template>
  <div class="mt-8 mb-5">
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.portfolio-item {
  display: grid;
  align-items: center;
  width: 100%;
  height: auto;
  opacity: 0.99;
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    120deg,
    rgba(40, 40, 40, 0.284) -6%,
    rgba(255, 255, 255, 0.05) 107%
  );
  border-image-slice: 1;
  background-image: linear-gradient(
      120deg,
      rgba(38, 38, 38, 0) -8%,
      rgba(255, 255, 255, 0) 101%
    ),
    linear-gradient(
      120deg,
      rgba(26, 26, 26, 0.301) -6%,
      rgba(255, 255, 255, 0.05) 107%
    );
  background-origin: border-box;
  padding: 30px;
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
