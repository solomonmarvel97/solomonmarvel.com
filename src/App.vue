<template>
  <router-view/>
</template>


<style>
@import 'assets/css/app.css';

.header {
  display: grid;
  place-items: center;
}

.header h1 {
  font-style: normal;
  font-size: 30px;
  text-align: center;
  width: 100%;
  color: #ffffff;
}

@media (max-width: 768px) {
  .header p {
    font-size: 30px;
  }
}
</style>
