<template>
  <div>
    <section>
      <div class="menu">
        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/workshop.png" alt="icon" />
            <p>Workshops</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/projects.png" alt="icon" />
            <p>Projects</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/livestream.png" alt="icon" />
            <p>Live Streams</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/university.png" alt="icon" />
            <p>University</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/learningpath.png" alt="icon" />
            <p>Learning Paths</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/curriculum.png" alt="icon" />
            <p>Learning Guides</p>
          </div>
        </div>

        <div class="menu_item">
          <div class="item">
            <img src="@/assets/icons/menu/mobile.png" alt="icon" />
            <p>Mobile Apps</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 30px;
  padding-top: 3em;
  padding-bottom: 3em;
}

@media (max-width: 768px) {
  .menu {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 5px;
  }

  p {
    font-size: 12px !important;
  }
}

.menu .menu_item {
  width: 100%;
  height: 60px;
  display: grid;
  padding: 10px;
  cursor: pointer;
  border-radius: var(--border-radius);
  place-items: center;
}

.menu .menu_item:hover {
  background: rgba(255, 255, 255, 0.064);
}

.menu .menu_item .item {
  width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
  gap: 20px;
  align-items: center;
}

.menu .menu_item .item img {
  width: 35px !important;
  height: 35px !important;
}
</style>
