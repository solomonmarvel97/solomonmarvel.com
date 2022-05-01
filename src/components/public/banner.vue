<template>
  <div>
    <div class="banner">
      <section>
        <div>
          <span>
            {{ message }}
          </span>
          <router-link v-if="actionVisibility" class="cta" :to="actionLink">
            {{ actionText }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    actionVisibility: Boolean,
    actionText: null,
    actionLink: String,
  },
};
</script>
<style scoped>
.banner {
  height: 50px;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #fff;
}

span {
  color: black;
  font-size: 13px;
  margin-right: 1em;
  letter-spacing: 1.5px;
  line-height: 2;
}

.cta {
  border: 1px solid black;
  color: black;
  border-radius: 30px;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 0;
  padding: 10px 15px;
  padding-bottom: 8px;
}

@media (max-width: 768px) {
  .banner {
    padding-top: 1em;
    padding-bottom: 1em;
    height: 100px;
  }

  span {
    line-height: 1.8;
  }
}

section {
  display: grid;
  place-items: center;
}
</style>
