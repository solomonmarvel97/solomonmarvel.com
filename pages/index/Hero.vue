<template>
  <div>
    <!-- <div class="path1"></div> -->
    <section class="mt-2 hero">
      <div class="spin glow">
      <img class="avatar-wrapper" src="@/assets/images/rotate.svg"/>
      <img loading="lazy" class="avatar" src="@/assets/images/avatar/me.png" />
      </div>
      
      <div>
        <h1 class="mb-1">Marvelous <br> Solomon<span>.</span></h1>
        <p class="mb-5">Technical Consultant | Solutions Architect | Computer Programmer -</p>
        <div class="button-flex mb-3 cta">
          <a href="/consulting">
            Consult With Me
          </a>
          <img src="@/assets/icons/link.svg" alt=""/>
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
  color: var(--primary)
}

.cta img {
  height: 35px;
  width: 35px;
}

.spin {
  height:calc(20rem);
  width: calc(20rem);
  position: absolute;
  display: grid;
  place-items: center;
  top: 10px;
  right: 10px;
}

.avatar {
  border-radius: 50%;
  object-position: center;
  position: absolute;
  scale: 0.8;
}

.avatar-wrapper {
  position: absolute;
    -webkit-animation:spin 15s linear infinite;
    -moz-animation:spin 15s linear infinite;
    animation:spin 15s linear infinite;
    object-fit: cover;
}

@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}

h1 {
  color: white;
  line-height: .9;
  font-size: calc(8rem);
}

p {
  font-size: 22px;
}

.icons {
  width: 12px;
  height: 12px;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 3em;
    display: grid;
    position: relative;
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
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
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
}
</style>
