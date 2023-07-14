<template>
  <div>
    <section class="mt-2 hero">
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
          <a target="_blank" href="https://openprofile.dev/profile/superdeveloper">
            <img src="@/assets/icons/social/lf.png" />
            Linux Foundation
          </a>
        </div>

        <h1 class="mb-2">Marvelous <br> Solomon</h1>

        <p class="mb-6">Founder, Principal Software Engineer, Solutions Architect & Community Builder</p>

        <div class="button-flex cta">
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

      <div class="spin">
        <img class="avatar-wrapper" src="@/assets/images/rotate.svg" />
        <img loading="lazy" class="avatar" src="@/assets/images/avatar/me.png" />
      </div>

    </section>
  </div>
</template>

<style scoped>
.hero {
  z-index: 100;
  justify-content: space-between;
  display: flex;
  place-items: center;
  gap: 20px;
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}


.avatar {
  border-radius: 50%;
  object-position: center;
  padding: 50px;
  position: relative;

}

.avatar-wrapper {
  position: absolute;
  -webkit-animation: spin 25s linear infinite;
  -moz-animation: spin 25s linear infinite;
  animation: spin 25s linear infinite;
  object-fit: cover;
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
  line-height: .8;
  font-size: calc(6rem);
}

p {
  font-size: 16px;
  line-height: 1.6;
  width: 500px;
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
    padding-top: 2em;
    flex-direction: column-reverse !important;
	place-items: center;
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
