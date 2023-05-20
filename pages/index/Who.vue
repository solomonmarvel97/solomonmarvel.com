<template>
  <div class="who">
    <section>
      <p class="mb-3 text-black">so.. who am i really?</p>
      <h1 class="text-black">Experienced software engineer with more than a decade of engineering experience. Currently pursuing a MBA in Advanced AI & The Future of Automation @Nexford University, London.</h1>
  </section>
  </div>
</template>

<style scoped>
  .who {
    height: 100vh;
    width: 100%;
    background-color: var(--primary);
    display: grid;
    place-items: center;
    gap: 10px;
  }

  .who p::before {
    content: ' - '
  }
  .who p::after {
    content: ' - '
  }
  .who p {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
  }
</style>
