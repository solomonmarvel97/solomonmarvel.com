<template>
  <div>
    <div class="hero">
      <!-- <video no-controls muted autoplay loop>
        <source src="@/assets/images/background.mp4" type="video/mp4" />
      </video> -->
      <div class="path1"></div>
      <div class="container">
        <div>
          <div>
            <img class="image-wrapper avatar" src="@/assets/images/style1/avatar.png" />
          </div>
          <div class="wrapper mb-5">
            <h1 class="mb-1">Marvelous Akporowho</h1>
            <h3 class="mb-1">Technical Leader | Solutions Architect | Educator</h3>
            <p class="mb-2"> Let's talk about software architecture, systems design, web3, artificial intelligence,
              machine-learning, microservices & programming languages.
            </p>
            <div class="center">
              <a class="button-primary" href="https://calendly.com/akporowho-marvelous/let-s-talk" target="_blank">
                Book a session
              </a>
            </div>
            <div>
              <div class="mt-5 mb-5" id="calendar">
                <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif"
                  style="height: 50px; width: 50px;" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100%;
  background: black;
  mix-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#calendar {
  padding: 25px;
  border-radius: 25px;
  background: #53535329;
  border: 1px solid rgba(22, 22, 22, 0.456)
}


.wrapper {
  width: 60%;
  margin: 0 auto;
}


@media (max-width: 768px) {
  .wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .hero p {
    width: 90%;
  }
}

video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

h1 {
  line-height: 60px;
  color: #ffffff;
  font-size: 50px;
  margin-top: 25px;
  font-weight: 900 !important;
}

h1 span {
  font-family: Poppins;
  color: var(--primary);
}

.hero p {
  width: 70%;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2em;
}


@media (max-width: 768px) {
  .hero {
    padding-top: 3em;
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


h1 {
  font-size: 40px;
  font-style: normal;
  text-align: center
}

h3 {
  font-size: 20px;
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
  border-radius: 50%;
  height: 150px;
  width: 150px;
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


@media (max-width: 768px) {
  .side-image {
    width: 300px;
    z-index: -1;
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
  mounted() {
    GitHubCalendar("#calendar", "solomonmarvel97", {
      responsive: true,
      tooltips: true
    });
  }
};
</script>
