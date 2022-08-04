<template>
  <div class="navigation">
    <div class="sticky">
      <section>
        <div class="menu-wrapper">
          <div>
            <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank"><b>Linkedin</b></a>
            | <a href="https://topafrica.org" target="_blank">Projects</a>
          </div>
          <div>
            <div class="menu">
              <a class="item" target="_blank" href="https://topuniverse.org"> Top Universe</a>
              <a class="item" target="_blank" href="https://topafrica.org"> Top Africa </a>
              <a class="item" target="_blank" href="https://boltcliq.com"> Boltcliq Agency</a>
              <a class="item" target="_blank" href="https://github.com/solomonmarvel97">Git Hub</a>
              <a class="item" target="_blank" href="https://blog.topuniverse.org">Blog</a>
            </div>
          </div>
        </div>


        <div class="mobile-header">

          <div>
            <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank"><b>Linkedin</b></a>
            | <a href="https://topafrica.org" target="_blank">Projects</a>
          </div>

          <button class="open_toggle" @click="toggle"></button>
        </div>
      </section>

      <div class="menu-wrapper-mobile hidden" id="mobile-menu">
        <button class="close_toggle" @click="toggle">x</button>
        <div class="menu">
          <a class="item" target="_blank" href="https://topuniverse.org"> Top Universe</a>
          <a class="item" target="_blank" href="https://topafrica.org"> Top Africa </a>
          <a class="item" target="_blank" href="https://boltcliq.com"> Boltcliq Agency</a>
          <a class="item" target="_blank" href="https://github.com/solomonmarvel97">Git Hub</a>
          <a class="item" target="_blank" href="https://blog.topuniverse.org">Blog</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Select required elements from the DOM

export default {
  components: {},
  methods: {
    toggle(e) {
      const modal = document.querySelector("#mobile-menu");
      const body = document.querySelector("body");
      modal.classList.toggle("hidden");
      if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
      } else {
        // Enable scroll
        body.style.overflow = "auto";
      }
    },
  },
  computed: {
    routerPath() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style scoped>
.navigation {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 9999;
  font-size: 14px;
}

div.sticky {
  background-color: #000;
  width: 100%;
}

.logo {
  place-items: center;
  gap: 10px;
  display: flex;
  position: relative;
}

.logo img {
  height: 30px;
  width: 30px;
}

.logo p {
  font-size: 11px !important;
  letter-spacing: 1px;
  left: 35px;
}

.profile-wrapper {
  display: flex;
  gap: 15px;
  place-items: center;
}

.user-container {
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 15px;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
}

/* menu bar */
.menu-wrapper {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--input-color);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.menu {
  display: flex;
  width: 100%;
  column-gap: 45px;
  font-weight: 100;
  justify-content: center;
}

.menu .item {
  height: 35px;
  display: flex;
  justify-content: center;
  place-items: center;
  border-radius: var(--border-radius);
}

.new::after {
  content: " ";
  top: -10px;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: cyan;
  position: relative;
}

.menu-wrapper-mobile {
  display: none;
}

.mobile-header {
  display: none;
}

.active {
  background: var(--modal-color);
  height: 50px;
  filter: invert();
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.384);
}

.menu .item img {
  height: 17px;
  width: 17px;
}

.close_toggle {
  position: absolute;
  right: 20px;
  font-size: 28px;
  top: 18px;
  width: 20px;
  height: 20px;
  z-index: 9999;
  background: none;
  color: white;
  border: none;
}

/* mobile menu  */
@media (max-width: 768px) {
  .mobile-header {
    display: none;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-details {
    display: none;
  }

  .menu-wrapper-mobile {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    flex-direction: column;
    z-index: 999;
    height: 100vh;
    background: #151515;
    width: 100%;
    gap: 20px;
  }

  .hidden {
    display: none;
  }

  .menu-wrapper {
    display: none;
  }

  .menu-wrapper {
    height: 50px;
    width: 55%;
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--input-color);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .menu {
    margin-top: 4em;
    display: grid;
    grid-template-rows: 1fr;
    gap: 10px;
    padding: 20px;
    justify-content: start;
  }

  .profile-wrapper-mobile {
    width: 100%;
    padding-top: 60px;
    padding-left: 20px;
  }

  .menu .item {
    flex-basis: 120px;
    display: flex;
    justify-content: flex-start;
    height: 50px;
    padding: 0 30px;
    gap: 10px;
    border-radius: var(--border-radius);
  }

  p,
  a,
  li,
  span,
  label {
    font-size: 25px !important;
    font-weight: bold;
    font-family: "Space Grotesk", sans-serif !important;
  }

  .active {
    background: var(--modal-color);
    height: 50px;
    filter: invert();
    box-shadow: none !important;
  }

  .open_toggle {
    width: 20px;
    height: 20px;
    background: url("../../assets/icons/hamburger.svg");
    background-position: center;
    background-size: cover;
    border: none;
  }
}
</style>
