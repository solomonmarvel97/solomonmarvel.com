<template>
  <div>
    <section class="mt-2 hero">
      <div class="spin">
        <img class="avatar-wrapper" src="@/assets/images/rotate.svg" />
        <img loading="lazy" class="avatar" src="@/assets/images/avatar/me.png" />
      </div>

      <div>
        <div class="mb-2 socials">
          <a target="_blank" href="https://linkedin.com/in/superdeveloper">
            <img src="@/assets/icons/social/linkedin.svg" />
            Linkedin
          </a>
          <a target="_blank" href="https://twitter.com/solomonmarvel97">
            <img src="@/assets/icons/social/twitter.svg" />
            Twitter
          </a>
          <a target="_blank" href="https://github.com/solomonmarvel97">
            <img src="@/assets/icons/social/github.svg" />
            Github
          </a>
        </div>
        <h1 class="mb-3">Marvelous <br> Solomon</h1>
        <p class="mb-6">Software Engineer | Solutions Architect | Software / AI / ML / NLP Engineer</p>

        <div class="button-flex mb-3 cta">
          <a href="/consulting">
            Consulting
            <img src="@/assets/icons/link.svg" alt="" />
          </a>

          <a href="https://calendly.com/boltcliq/15-minutes-free-consultation?ref=boltcliq.com" target="_blank">
            Connect
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
.hero {
  z-index: 100;
  justify-content: space-between;
  flex-direction: row-reverse;
  place-items: center;
  gap: 20px;
  position: relative;
  height: 100%;
  padding: 5em 0;
}

.cta a {
  font-size: 20px;
  color: var(--primary);
  display: flex;
  gap: 5px;
  place-items: center;
  border-radius: var(--border-radius);
  padding: 15px;
  background-color: #141414;
}

.cta a:hover {
  background-color: #272727;
}


.cta img {
  height: 25px;
  width: 25px;
}

.spin {
  height: 16em;
  width: 16em;
  position: absolute;
  top: 0px;
  right: 0px;
}

.avatar {
  border-radius: 50%;
  object-position: center;
  padding: 30px;
  /* border: .1px dashed rgb(79, 79, 79); */
  height: 100%;
  width: 100%;
}

.avatar-wrapper {
  position: absolute;
  -webkit-animation: spin 25s linear infinite;
  -moz-animation: spin 25s linear infinite;
  animation: spin 25s linear infinite;
  object-fit: cover;
  padding: 10px;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

h1 {
  color: white;
  line-height: .9;
  font-size: calc(7rem);
}

p {
  font-size: 20px;
  line-height: 1.3;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.socials img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}

.socials a {
  font-size: 16px;
  display: flex;
  gap: 5px;
  place-items: center;
  padding: 5px 8px;
  border-radius: var(--border-radius);
}

.socials a:hover {
  background-color: rgba(255, 255, 255, 0.109);
}

.icons {
  width: 12px;
  height: 12px;
}

@media (max-width: 1000px) {
  .hero {
    padding-top: 2em;
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	place-items: center;
    height: 100vh;
  }

  .hero .spin {
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 3em;
    overflow: hidden
  }



  h1 {
    width: 100%;
    line-height: 1.2;
    font-size: 50px;
  }

  h3 {
    width: 100%;
    line-height: 1.2;
    font-size: 20px;
  }

  .hero p {
    width: 90%;
  }
}


.hero .cta_blog {
  height: 65px;
  border-radius: var(--border-radius);
  background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
  color: white;
  display: grid;
}

.hero .cta_github {
  height: 65px;
  display: grid;
  opacity: 0.73;
  border-radius: var(--border-radius);
  background-color: #f0f0f0;
}


@media (max-width: 1000px) {
  .hero {
    height: auto;
    display: block;
  }

  .hero p {
    width: 100%;
  }

  .hero .avatar {
    width: 100%;
    height: auto;
  }
  
  .spin {
    right: 0px;
  }
}

.bringtofront {
  position: absolute;
  z-index: 99;
  top: 50px;
  left: 50px;
}

.bringtofront {
  color: white;
}
</style>
