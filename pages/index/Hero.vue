<template>
  <div class="mb-5">
  <div class="path1"></div>
    <section class="mt-2 hero">
          <div>
            <img class="avatar" src="@/assets/images/avatar/1.png" />
          </div>
          <div>
            <h1 class="mb-1">Marvelous Akporowho</h1>
            <h3 class="mb-1">Technical Leader | Solutions Architect | Software Engineer</h3>
            <p class="mb-2"> More than 12+ years of software engineering. MSc in Advanced AI & The future of automation (in view). Let's talk about software architecture,
              systems design, artificial intelligence, microservices & products.
            </p>
            <div class="button-flex">
              <a class="button-primary" href="https://calendly.com/akporowho-marvelous/let-s-talk" target="_blank">
                Consulting
              </a>
              <nuxt-link class="button-primary" to="courses">
                Courses
              </nuxt-link>
            </div>
          </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row-reverse;
  place-items: center;
  gap: 20px;
  height: 80vh;
}

.hero > div {
  flex: 1;
}


#calendar {
  padding: 25px;
  border-radius: var(--border-radius);
  background: #53535329;
  border: 1px solid rgba(22, 22, 22, 0.456)
}

h1 {
  /* background-image: linear-gradient(45deg, rgb(206, 189, 249) 0.67%, #40ebc3 89.67%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: white;
  line-height: 1.1;
  font-size: 60px;
  font-weight: 900 !important;
}

h1 span {
  font-family: Poppins;
  color: var(--primary);
}

.hero p {
  color: #ffffff;
  margin-bottom: 2em;
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


h3 {
  font-size: 25px;
  color: white;
}

.hero p {
  line-height: 1.5;
  color: white;
}


@media (max-width: 768px) {
  .hero {
    padding-top: 3em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  h1 {
    width: 100%;
    line-height: 1.2;
    font-size: 40px;
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


.hero .avatar {
  border-radius: var(--input-border-radius) !important;
  height: 80%;
  width: 80%;
  display: grid;
  margin: 0 auto;
  object-fit: cover
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

.path1 {
  position: fixed;
  width: 500px;
  height: 100vh;
  top: 0px;
  right: 0px;
  background-image: url("../../assets/images/style2/path1.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
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
