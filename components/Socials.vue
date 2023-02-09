<template>
<div class="socials">
          <p>Let's connect</p>
          <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank">
            <img src="@/assets/icons/linkedin.svg"/>
          </a>
          <a href="https://www.youtube.com/@superdeveloper" target="_blank">
            <img src="@/assets/icons/youtube.svg"/>
          </a>
          <a href="https://www.twitter.com/solomonmarvel97" target="_blank">
            <img src="@/assets/icons/twitter.svg"/>
          </a>
          <a href="https://www.instagram.com/solomonmarvel97" target="_blank">
            <img src="@/assets/icons/instagram.svg"/>
          </a>
        </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 5px;
  place-items: center;
  align-items: flex-start;
}

.socials img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  /* color: rgb(88, 88, 252) */
}
</style>