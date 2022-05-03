<template>
  <footer>
    <div class="container-grid mt-5">
      <div class="container">
        <div>
          <h1>I teach technical stuffs.</h1>
          <br />
          <p>
            Primarily in Computer Science, Software Engineering & Startup
            Engineering.
          </p>
          <br />
          <div>
            <a href="https://www.buymeacoffee.com/superdeveloper">
              <img
                src="@/assets/images/buymeacoffee-button.gif"
                style="width: 200px"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="container yellow">
        <div>
          <h1>Achievements 🎉</h1>
          <br />
          <p>Founder/Director Of Learning @topuniverse</p>
          <p>Founder @topskill</p>
          <p>Co-founder @foodsbarn</p>
          <p>Technical Consultant @topafrica</p>
          <p>Technical Consultant @theboltcliqcompany</p>

          <div></div>
        </div>
      </div>
    </div>

    <div class="copyright mt-5">
      Copyright @ {{ new Date().getFullYear() }} All rights reserved
    </div>
  </footer>
</template>

<style scoped>
.container-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.container {
  display: grid;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: rgb(24, 24, 24);
  border-radius: 18px;
  padding: 40px;
}

.yellow {
  background-color: rgb(255, 233, 133) !important;
}

.yellow >div> h1 {
  color: black;
}
.yellow >div> p {
  color: black;
}
.container h1 {
  color: white;
}
.container p {
  color: white;
}

footer .copyright {
  display: grid;
  place-items: center;
  color: white;
  font-size: 12px;
}
</style>
