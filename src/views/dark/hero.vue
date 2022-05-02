<template>
  <div class="mb-5">
    <div class="bringtofront">
      <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank"
        ><b>Linkedin</b></a
      >
      |
      <a href="https://topafrica.org" target="_blank">Projects</a>
      <div class="theme-picker mt-3">
        <router-link to="#"><div class="light"></div></router-link>
        <router-link to="#"><div class="dark"></div></router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="path1"></div>
    <div class="path2"></div>

    <div>
      <div class="image-wrapper">
        <img class="avatar" src="@/assets/images/style1/avatar.png" />
      </div>
    </div>

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
  display: grid;
  place-items: center;
}

.container h1 {
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  text-align: center;
}

.container h2 {
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  text-align: center;
}

.container p {
  font-size: 16px;
  line-height: 1.5;
  color: white;
  width: 500px;
  text-align: center;
}

.container .image-wrapper {
  border: 0.5px solid rgba(255, 255, 255, 0.219);
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  padding: 5px;
}
.container .avatar {
  border-radius: 50%;
  height: 120px;
  width: 120px;
}

.container .button-grid {
  display: grid;
  align-items: center;
  width: 250px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}
.container .cta_blog {
  height: 65px;
  border-radius: 18px;
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
  border-radius: 18px;
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

.path2 {
  position: absolute;
  width: 500px;
  height: 600px;
  top: 1px;
  left: 1px;
  background-image: url("../../assets/images/style2/path2.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 90;
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
  position: relative;
  z-index: 99;
}

.bringtofront {
  color: white;
}
</style>
