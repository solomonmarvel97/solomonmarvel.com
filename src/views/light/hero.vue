<template>
  <img class="side-image" src="@/assets/images/style1/hero-image.png" />
  <div class="container">
    <div class="mb-10">
      <p>
        <b
          ><a href="https://www.linkedin.com/in/superdeveloper/" target="_blank"
            >Linkedin</a
          ></b
        >
      </p>
      <div class="theme-picker mt-3">
        <router-link to="light">
          <div>
            <div class="light"></div>
          </div>
        </router-link>

        <router-link to="dark">
          <div>
            <div class="dark"></div>
          </div>
        </router-link>
      </div>
    </div>
    <img class="avatar" src="@/assets/images/style1/avatar.png" />
    <h1 class="mb-1">Marvelous Akporowho</h1>
    <h2 class="mb-1">Entrepreneur | Computer Programmer</h2>
    <p class="mb-2">
      Let's talk about computer architecture, web3, artificial intelligence,
      machine-learning, microservices & programming languages.
    </p>
    <div class="button-grid">
      <a href="https://blog.topuniverse.org">
        <div class="cta_blog">
          <div>
            <span> <img class="icons" src="@/assets/icons/blog.svg" /> </span>
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
</template>

<style scoped>
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
  width: 600px;
}

.container h1 {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #050505;
}

.container h2 {
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}

.container p {
  font-size: 16px;
  line-height: 1.5;
  color: #000;
}

.container .avatar {
  margin-bottom: 20px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.container .button-grid {
  display: grid;
  align-items: center;
  width: 300px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}
.container .cta_blog {
  height: 65px;
  border-radius: 18px;
  border: solid 5px rgba(255, 255, 255, 0.55);
  background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
  color: white;
  display: grid;
  place-items: center;
}

.container .cta_github {
  height: 65px;
  opacity: 0.73;
  border-radius: 18px;
  border: solid 5px rgba(255, 255, 255, 0.55);
  background-color: #f0f0f0;
  display: grid;
  place-items: center;
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
}
</style>
