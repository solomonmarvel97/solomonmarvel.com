<template>
  <footer>
    <div class="copyright mt-5">
      Copyright @ {{ new Date().getFullYear() }} All rights reserved
    </div>
  </footer>
</template>

<style scoped>
.container-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.container {
  display: grid;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: rgb(24, 24, 24);
  border-radius: 15px;
  padding: 40px;
}

.yellow {
  background-color: rgb(255, 233, 133) !important;
}

.yellow >div> h1 {
  color: black;
}
.yellow >div> p {
  color: black;
}
.container h1 {
  color: white;
}
.container p {
  color: white;
}

footer .copyright {
  display: grid;
  place-items: center;
  color: white;
  font-size: 12px;
}
</style>
