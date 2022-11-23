<template>
  <footer>
    <div class="copyright mt-8">
      Made with ❤️ by <a href="https://solomonmarvel.com" target="_blanl">Boltcliq & Company</a>
    </div>

    <div class="copyright mt-2">
      Copyright @ {{ new Date().getFullYear() }}
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
