<template>
  <footer>
    <div class="copyright mt-2">
      <p> © {{ new Date().getFullYear() }}, <i>Marvelous Solomon</i>. All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
footer .copyright {
  display: grid;
  place-items: center;
  color: white;
  font-size: 12px;
}
</style>
