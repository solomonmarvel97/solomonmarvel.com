<template>
    <div class="portfolio">
    <section>
    <div class="mt-8 mb-8">
      <div>
        <h1 class="mb-5">Portfolio & Investments</h1>
      </div>

      <div class="portfolio-grid">
        <div class="portfolio-item glass glow" v-for="(item, index) in portfolio" :key="index">
          <a target="blank" :href="item.link">
            <div class="">
              <img loading="lazy" :src="item.image" />
              <div class="">
                <div class="details">
                  <h3 class="mb-1">{{ item.platform }}</h3>
                  <p class="">{{ item.position }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div>
  </template>

  <script>
  import { portfolio } from "@/data/portfolio.js";

  export default {
    layout: 'web',
    data() {
      return {
        portfolio: portfolio,
      };
    },
  };
  </script>

  <style scoped>
  .portfolio {
    padding-bottom: 2em;
  }
  .icon {
    font-size: 25px;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    gap: 30px;
    width: 100%;
  }

  .portfolio-item {
    position: relative;
    align-items: center;
    height: 200;
    border-radius: var(--input-border-radius) !important;
  }

  .portfolio-item .details {
    padding: 30px;
  }

  .portfolio-item img {
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
    object-fit: cover;
    height: 200px;
  }

  @media (max-width: 768px) {
    .portfolio-item {
      flex-basis: 150px;
      border-radius: var(--border-radius);
    }
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
