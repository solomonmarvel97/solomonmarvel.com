<template>
  <div class="navigation">
    <div class="sticky">
      <section>
        <div class="menu-wrapper">
          <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank">
            <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.9999 0.399994C4.6979 0.399994 0.399902 4.69799 0.399902 9.99999C0.399902 15.302 4.6979 19.6 9.9999 19.6C15.3019 19.6 19.5999 15.302 19.5999 9.99999C19.5999 4.69799 15.3019 0.399994 9.9999 0.399994ZM7.6499 13.979H5.7059V7.72299H7.6499V13.979ZM6.6659 6.95499C6.0519 6.95499 5.6549 6.51999 5.6549 5.98199C5.6549 5.43299 6.0639 5.01099 6.6909 5.01099C7.3179 5.01099 7.7019 5.43299 7.7139 5.98199C7.7139 6.51999 7.3179 6.95499 6.6659 6.95499ZM14.7499 13.979H12.8059V10.512C12.8059 9.70499 12.5239 9.15699 11.8209 9.15699C11.2839 9.15699 10.9649 9.52799 10.8239 9.88499C10.7719 10.012 10.7589 10.192 10.7589 10.371V13.978H8.8139V9.71799C8.8139 8.93699 8.7889 8.28399 8.7629 7.72199H10.4519L10.5409 8.59099H10.5799C10.8359 8.18299 11.4629 7.58099 12.5119 7.58099C13.7909 7.58099 14.7499 8.43799 14.7499 10.28V13.979V13.979Z"
                fill="white" />
            </svg>
          </a>
          <div>
            <div class="menu">
              <ul>
                <li>
                  <a href="#">Companies</a>
                  <ul>
                    <a href="https://boltcliq.com" target="_blank" class="collect">
                      <h2>🏢</h2>
                      Boltcliq
                    </a>
                    <a href="https://topafrica.org" target="_blank" class="collect">
                      <h2>🏢</h2>
                      Top Africa
                    </a>
                    <a href="https://topuniverse.org" target="_blank" class="collect">
                      <h2>🏢</h2>
                      Top Universe
                    </a>
                  </ul>
                </li>
              </ul>
              <ul>
                <li class="item">
                  <a target="_blank" href="https://github.com/solomonmarvel97">🐙 Github</a>
                </li>
              </ul>
              <ul>
                <li class="item">
                  <a target="_blank" href="https://superdev.substack.com">Blog</a>
                </li>
              </ul>
              <ul>
                <li class="item">
                  <a target="_blank" href="https://topuniverse.org/coaching/cohort">🚀 Learn Tech</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-header">
          <a href="https://www.linkedin.com/in/superdeveloper/" target="_blank">
            <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.9999 0.399994C4.6979 0.399994 0.399902 4.69799 0.399902 9.99999C0.399902 15.302 4.6979 19.6 9.9999 19.6C15.3019 19.6 19.5999 15.302 19.5999 9.99999C19.5999 4.69799 15.3019 0.399994 9.9999 0.399994ZM7.6499 13.979H5.7059V7.72299H7.6499V13.979ZM6.6659 6.95499C6.0519 6.95499 5.6549 6.51999 5.6549 5.98199C5.6549 5.43299 6.0639 5.01099 6.6909 5.01099C7.3179 5.01099 7.7019 5.43299 7.7139 5.98199C7.7139 6.51999 7.3179 6.95499 6.6659 6.95499ZM14.7499 13.979H12.8059V10.512C12.8059 9.70499 12.5239 9.15699 11.8209 9.15699C11.2839 9.15699 10.9649 9.52799 10.8239 9.88499C10.7719 10.012 10.7589 10.192 10.7589 10.371V13.978H8.8139V9.71799C8.8139 8.93699 8.7889 8.28399 8.7629 7.72199H10.4519L10.5409 8.59099H10.5799C10.8359 8.18299 11.4629 7.58099 12.5119 7.58099C13.7909 7.58099 14.7499 8.43799 14.7499 10.28V13.979V13.979Z"
                fill="white" />
            </svg>
          </a>
          <button class="open_toggle" @click="toggle"></button>
        </div>
      </section>

      <div class="menu-wrapper-mobile hidden" id="mobile-menu">
        <button class="close_toggle" @click="toggle">x</button>
        <div class="menu">
          <a class="item" target="_blank" href="https://superdev.substack.com">Blog</a>
          <a class="item" target="_blank" href="https://topuniverse.org"> Top Universe</a>
          <a class="item" target="_blank" href="https://topafrica.org"> Top Africa </a>
          <a class="item" target="_blank" href="https://boltcliq.com"> Boltcliq Agency</a>
          <a class="item" target="_blank" href="https://github.com/solomonmarvel97">🐙 Github</a>
          <a class="item" target="_blank" href="https://topuniverse.org/coaching/cohort">🚀 Learn Tech</a>
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
}

.menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
}

.menu ul li {
  display: inline-block;
}

.menu a {
  display: block;
  color: #FFF;
  text-decoration: none;
}

/* Hide Dropdowns by Default */
.menu ul ul {
  display: none;
  position: absolute;
  padding: 20px 20px;
  background: #05020C;
  border-radius: 15px;
  width: 220px;
}

.menu ul ul>.collect {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu ul ul>.collect>img {
  height: 30px;
  width: 30px;
}

/* Display Dropdowns on Hover */
.menu ul li:hover>ul {
  display: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

/* Fisrt Tier Dropdown */
.menu ul ul li {
  float: none;
  display: list-item;
  position: relative;
}

.menu ul ul>* {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.038) !important;
  border: .1px solid rgba(255, 255, 255, 0);

}

.menu ul ul>*:hover {
  border: .1px solid rgba(255, 255, 255, 0.14);
}






div.sticky {
  background: #05020C;
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
  column-gap: 25px;
  justify-content: center;
}

.menu .item {
  flex-basis: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  place-items: center;
  border-radius: var(--border-radius);
  font-size: 14px;
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
    background: #010101;
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
