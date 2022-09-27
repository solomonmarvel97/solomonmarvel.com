<template>
  <div class="mt-8 mb-5">
    <div class="center">
      <h1 class="mb-3">My Portfolio</h1>
    </div>
    <div class="portfolio-grid">
      <div class="portfolio-item" v-for="(item, index) in portfolio" :key="index">
        <a target="blank" :href="item.link">
          <div class="glow">
            <img :src="item.image" />
            <div class="flex">
              <div>
                <h3 class="mb-1">{{ item.platform }}</h3>
                <p class="">{{ item.position }}</p>
              </div>
              <h1 class="icons">{{item.icon}}</h1>
            </div>
          </div>
        </a>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  gap: 15px;
  width: 100%;
}

.portfolio-item {
  position: relative;
  align-items: center;
  flex-basis: 300px;
  height: auto;
  opacity: 0.99;
  border-radius: var(--border-radius);
  border-width: 1px;
  padding: 10px;
  background: #6868681e;
  border: .5px solid rgba(255, 255, 255, 0.085)
}

.portfolio-item img {
  border-radius: 4px;
  margin-bottom: 1em;
  object-fit: cover;
  height: 150px;
}

@media (max-width: 768px) {
  .portfolio-item {
    padding: 10px;
    flex-basis: 150px;
    border-radius: var(--border-radius);
  }
}

p {
  font-size: 14px;
  color: rgb(168, 255, 243);
}

a {
  font-size: 12px;
  color: rgb(172, 172, 172);
}

.icons {
  width: 50px;
  height: 50px;
  font-size: 20px !important;
  border-radius: 50%;
  border: 2px dotted rgba(255, 255, 255, 0.097);
  padding: 10px;
}
</style>
