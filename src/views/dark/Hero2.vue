<template>
  <div>
    <div class="hero">
      <video no-controls muted autoplay loop>
        <source src="@/assets/images/background.mp4" type="video/mp4" />
      </video>
      <div class="mb-5">
        <div class="bringtofront">
          <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank"
            ><b>Linkedin</b></a
          >
          | <a href="https://topafrica.org" target="_blank">Projects</a>
        </div>
      </div>
      <div class="container">
        <div>
          <div class="path1"></div>
          <div>
              <img class="image-wrapper avatar" src="@/assets/images/style1/avatar.png" />
          </div>

          <h1 class="mb-1">Marvelous Akporowho</h1>
          <h2 class="mb-1">Entrepreneur | Computer Programmer</h2>
          <p class="mb-2">
            Let's talk about computer architecture, web3, artificial
            intelligence, machine-learning, microservices & programming
            languages.
          </p>
          <div class="mb-2">
            <p>
              <i>
                <strong>
                  <a
                    href="https://calendly.com/akporowho-marvelous/let-s-talk"
                    target="_blank"
                  >
                    #Book a meeting
                  </a>
                </strong>
              </i>
            </p>
          </div>
          <div class="button-grid">
            <a href="https://blog.topuniverse.org">
              <div class="cta_blog">
                <div>
                  <span>
                    <img class="icons" src="@/assets/icons/blog.svg" />
                  </span>
                  Blog
                </div>
              </div>
            </a>
            <a href="https://github.com/solomonmarvel97" target="blank">
              <div class="cta_github">
                <div>
                  <span>
                    <img class="icons" src="@/assets/icons/github.svg" />
                  </span>
                  Github
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background: black;
  mix-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.hero:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.639);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

h1 {
  line-height: 60px;
  color: #ffffff;
  font-size: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: 600;
}

h1 span {
  font-family: Poppins;
  color: var(--primary);
}

.hero p {
  width: 700px;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
}

.hero .player_button {
  display: grid;
  min-width: 152px;
  width: 152px;
  align-items: center;
  grid-template-columns: 30% 70%;
  margin-top: 32px;
}

.hero .player_button p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    height: 90vh;
    padding-top: 3em;
  }

  .hero button {
    margin: 0;
    margin-left: 2.6em;
  }

  h1 {
    width: 100%;
    line-height: 47px;
    font-size: 37px;
    text-align: left;
  }

  .hero p {
    width: 90%;
  }

  .hero .container {
    width: 100%;
    padding-top: 3em;
    height: 100%;
  }
}

.icons {
  width: 12px;
  height: 12px;
}

.side-image {
  position: absolute;
  width: 600px;
  top: 0px;
  right: 0px;
  background-image: ("../../assets/images/style1/hero-image.png");
}

.container {
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  text-align: center
}

h2 {
  font-size: 25px;
  color: white;
  text-align: center;
}

.container p {
  font-size: 16px;
  line-height: 1.5;
  color: white;
  text-align: center;
}

.container .image-wrapper {
  border: 0.5px solid rgba(255, 255, 255, 0.219);
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 5px;
  margin: 0 auto;
}

.container .avatar {
  border-radius: 15px;
  height: 150px;
  width: 150px;
}

.container .button-grid {
  display: grid;
  align-items: center;
  width: 250px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin: 0 auto;
}
.container .cta_blog {
  height: 65px;
  border-radius: 15px;
  background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
  color: white;
  display: grid;
  place-items: center;
}

.container .cta_github {
  height: 65px;
  display: grid;
  place-items: center;
  opacity: 0.73;
  border-radius: 15px;
  background-color: #f0f0f0;
}

.container .button-grid > div {
  display: grid;
  place-items: center;
}

@media (max-width: 768px) {
  .side-image {
    width: 300px;
    z-index: -1;
  }

  .container {
    width: 100%;
  }

  .container p {
    width: 100%;
  }
}

.path1 {
  position: absolute;
  width: 500px;
  height: 100vh;
  top: 1px;
  right: 1px;
  background-image: url("../../assets/images/style2/path1.png");
  background-repeat: no-repeat;
  background-size: cover;
}


@media (max-width: 768px) {
  .path1 {
    width: 100% !important;
  }

  .path2 {
    width: 100% !important;
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

<script>
export default {
  name: "Hero_Component",
  components: {},
};
</script>
