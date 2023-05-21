<template>
  <div>
    <!-- <div class="path1"></div> -->
    <section class="mt-2 hero">
      <div class="spin">
        <img class="avatar-wrapper" src="@/assets/images/rotate.svg" />
        <img loading="lazy" class="avatar" src="@/assets/images/avatar/me.png" />
      </div>

      <div>
        <div class="mb-3 socials">
          <a target="_blank" href="https://linkedin.com/in/superdeveloper">- Linkedin,</a>
          <a target="_blank" href="https://twitter.com/solomonmarvel97">- Twitter</a>
          <a target="_blank" href="https://github.com/solomonmarvel97">- Github</a>
        </div>
        <h1 class="mb-3">Marvelous <br> Solomon<span>.</span></h1>
        <p class="mb-6">Technical Consultant | Senior Solutions Architect | AI/NLP Engineer</p>

        <div class="button-flex mb-3 cta">
          <a href="/consulting">
            Book a session
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>

      <!-- <div class="books">
        
      </div> -->

    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  place-items: center;
  z-index: 100;
  justify-content: space-between;
  flex-direction: row-reverse;
  place-items: center;
  gap: 20px;
  position: relative;
  height: 100vh;
}


.hero .books {
  height: 250px;
  width: 500px;
  background-color: var(--primary);
  position: absolute;
  bottom: 0;
  right: 0;
}


.cta a {
  font-size: 20px;
  color: var(--primary);
  display: flex;
  gap: 10px;
  place-items: center
}

.cta img {
  height: 30px;
  width: 30px;
}

.spin {
  height: calc(18rem);
  width: calc(18rem);
  position: absolute;
  top: 10px;
  right: 10px;

}

.avatar {
  border-radius: 50%;
  object-position: center;
  padding: 30px;
  border: .1px solid rgba(217, 217, 217, 0.4);
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
  font-size: 25px;
  line-height: 1.3;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.socials a {
  font-size: 20px;
  line-height: 1.3;
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
    height: 100vh;
  }

  .hero .spin {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 3em
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
  }

  .side-image {
    width: 300px;
    z-index: -1;
  }

  .hero p {
    width: 100%;
  }

  .hero .avatar {
    height: 100%;
    width: 100%;
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


.glow:before {
  content: "";
  background: linear-gradient(45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000);
  position: absolute;
  top: 20%;
  left: 20%;
  background-size: 50%;
  z-index: -1;
  filter: blur(100px);
  width: calc(50% + 0px);
  height: calc(50% + 0px);
  animation: glowing 0s linear infinite;
  opacity: 1;
  border-radius: var(--border-radius);
}</style>
