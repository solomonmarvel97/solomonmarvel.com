<template>
  <div class="who">
    <section>
      <p class="mb-3 text-black">who am i?</p>
      <h1 class="text-black">Hi there, I am an experienced software engineer with more than 12+ years of industry experience. I am currently on my MBA prorgam studying Advanced AI & The future of Automation @Nexford University, London.</h1>
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
