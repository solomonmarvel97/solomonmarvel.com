<template>
  <button class="button" :class="theme">
    <div v-if="loading" class="spinner"></div>
    <p v-if="!loading">{{ text }}</p>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
    text: {
      type: String,
      default: "Button Text",
    },
    theme: {
      type: String,
      default: 'ascent'
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  border-radius: 3px !important;
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

button p {
  margin: 0;
  line-height: 0;
}

.spinner {
  border: 3px solid white;
  border-top: 2px solid #383838;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
