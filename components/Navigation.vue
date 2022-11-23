<template>
  <div class="navigation" id="nav">
    <div>
      <section>
        <div class="menu-wrapper">
          <NuxtLink class="logo" to="/">
            <img loading="lazy" src="@/assets/images/avatar/4.png"/>
            <p>Marv's Garage</p>
          </NuxtLink>
          <div>
            <div class="menu">
              <ul>
                <li>
                  <nuxt-link to="/masterclass">Masterclass</nuxt-link>
                </li>
                <li class="item">
                  <nuxt-link to="/testimonials">Testimonials</nuxt-link>
                </li>
                <li class="item ">
                  <nuxt-link to="/portfolio">Portfolio</nuxt-link>
                </li>
                <li class="item ">
                  <nuxt-link to="/consulting">Consulting</nuxt-link>
                </li>
                <li class="item">
                  <a target="_blank" href="https://superdev.substack.com">Blog</a>
                </li>
                  <a class="item button-primary" target="_blank" href="https://topuniverse.org/coaching/cohort" rel="noopener">Free Bootcamp</a>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-header">
          <NuxtLink class="logo" to="/">
            <img loading="lazy" src="@/assets/images/avatar/4.png"/>
            <p>Marv's Garage</p>
          </NuxtLink>
          <button class="open_toggle" @click="toggle"></button>
        </div>
      </section>

      <div class="menu-wrapper-mobile hidden" id="mobile-menu">
        <button class="close_toggle" @click="toggle">x</button>
        <div class="menu">
          <a class="item" href="/masterclass">Masterclass</a>
          <a class="item" href="/testimonials">Testimonials</a>
          <a class="item" href="/portfolio">Portfolio</a>
          <a class="item" href="/consulting">Consulting</a>
          <a class="item" target="_blank" href="https://superdev.substack.com"> Blog</a>
          <a class="item" target="_blank" href="https://topuniverse.org/coaching/cohort">Free Bootcamp</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
    handleScroll() {
      let myNav = document.getElementById("nav");
      window.onscroll = function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
          myNav.classList.add("scroll");
        } else {
          myNav.classList.remove("scroll");
        }
      };
    }
  },
  computed: {
    routerPath() {
      return this.$route.name.toLowerCase();
    },
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
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
  text-decoration: none;
}

/* Fisrt Tier Dropdown */
.menu ul li {
  float: none;
  display: list-item;
  position: relative;
}

.menu ul > li {
  width: 110px;
  padding: 10px 0px;
  border-radius: var(--border-radius);
}

.scroll {
  background-color: rgb(11, 11, 11);
  transition: all 1s ease-in-out;
}

.logo {
  place-items: center;
  gap: 10px;
  display: flex;
  position: relative;
}

.logo img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.logo p {
  font-size: 14px !important;
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
    font-family: "Maglony", sans-serif !important;
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
    background: url("../assets/icons/hamburger.svg");
    background-position: center;
    background-size: cover;
    border: none;
  }
}
</style>
