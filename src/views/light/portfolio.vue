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
  row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.portfolio-item {
  display: grid;
  align-items: center;
  padding: 30px;
  opacity: 0.73;
  width: 100%;
  height: auto;
  border-radius: 18px;
  border: solid 1px #fff;
  background-image: linear-gradient(120deg, #fff -8%, #f7ca91 102%);
}

p {
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #000;
}

h1 {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #000;
  font-weight: bold;
}

a {
  font-weight: bold;
  font-size: 14px;
  color: rgb(68, 68, 68);
}
</style>
