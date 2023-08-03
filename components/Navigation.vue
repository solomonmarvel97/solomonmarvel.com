<template>
  <div class="navigation" id="nav">
    <div>
      <section>
        <div class="menu-wrapper">
          <NuxtLink class="logo" to="/">
            <p>solomonmarvel97</p>
          </NuxtLink>
          <div>
            <div class="menu">
              <ul>
                <li class="item">
                  <a target="_blank" href="https://boltcliq.substack.com/">Publications</a>
                </li>
                <li class="item">
                  <a class="item" target="_blank" href="https://blog.topuniverse.org/author/solomonmarvel97/">Articles</a>
                </li>
                <li class="item">
                  <a href="/consulting">Consulting</a>
                </li>
                <li class="item">
                  <a href="/mentoring">Mentoring</a>
                </li>
                <li class="item">
                  <nuxt-link to="/testimonials">Testimonials</nuxt-link>
                </li>
                <li class="item">
                  <a href="/courses/git" rel="noopener">Courses</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-header">
          <NuxtLink class="logo" to="/">
            <p>solomonmarvel97</p>
          </NuxtLink>
          <button class="open_toggle" @click="toggle"></button>
        </div>
      </section>

      <div class="menu-wrapper-mobile hidden" id="mobile-menu">
        <button class="close_toggle" @click="toggle">x</button>
        <div class="menu">
          <a class="item" target="_blank" href="https://boltcliq.substack.com/">Publications</a>
          <a class="item" target="_blank" href="https://blog.topuniverse.org/author/solomonmarvel97/">Articles</a>
          <a class="item" href="/consulting">Consulting</a>
          <a class="item" href="/mentoring">Mentoring</a>
          <a class="item" href="/testimonials">Testimonials</a>
          <a class="item" href="/consulting">Consulting</a>
          <a class="item" href="/courses/git">Courses</a>
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
  position: fixed;
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


.menu ul>li {
  width: 110px;
  padding: 10px 0px;
}

.scroll {
  background-color: black;
}

.logo {
  place-items: center;
  gap: 10px;
  display: flex;
  position: relative;
}

.logo p {
  font-family: "TWK Everett", "Inter", sans-serif;
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

.avatar {}

/* menu bar */
.menu-wrapper {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--input-color);
}

.menu {
  display: flex;
  width: 100%;
  column-gap: 25px;
  justify-content: center;
}

.menu .item {
  flex-basis: 120px;
  display: grid;
  justify-content: center;
  row-gap: 5px;
  place-items: center;
  transition: all 200ms ease-in;
}

/* .menu ul li::after {
  transition: all 1s ease-in;
  display: none;
  flex-direction: row;
  content: '';
  width: 100%;
  height: .1px;
  border-radius: 50%;
  background-color: white;
} */

.menu ul li:hover {
  /* padding: 2px 2px; */
  background-color: rgb(24, 24, 24);
  border-radius: 50px;
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
  background-color: #1e1e1e;
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
@media (max-width: 1000px) {
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
    gap: 25px;
    padding: 20px;
    justify-content: center;
  }

  .profile-wrapper-mobile {
    width: 100%;
    padding-top: 60px;
    padding-left: 20px;
  }

  .menu .item {
    flex-basis: 300px;
    display: flex;
    justify-content: center;
    height: 50px;
    gap: 10px;
    border-radius: var(--border-radius);
    color: white;
    font-weight: 300 !important;
    font-family: "TWK Everett", "Inter", sans-serif;
    font-size: 35px !important;
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
