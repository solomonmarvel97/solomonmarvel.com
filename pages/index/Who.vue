<template>
  <div class="who">
    <section>
      <p class="mb-3 text-black">who am i?</p>
      <h1 class="text-black">I am an Experienced software engineer with 12+ years of industry experience. Currently pursuing MBA in Advanced AI & The Future of Automation @Nexford University, London.</h1>
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
