<template>
  <footer>
    <div class="container-grid mt-5">
      <div class="container">
        <div>
          <div class="mb-2">
            <h3>EXPERIENCE:</h3>
            <p>Computer Programmer (11+)</p>
          </div>
          <div class="mb-2">
            <h3>STACK:</h3>
            <p>
              AWS, NodeJS, Python, Javascript, C++, Perl, Rust, VueJS, Flutter
            </p>
          </div>
          <div class="mb-2">
            <h3>PROFICIENCY:</h3>
            <p>
              AWS, Azure, GCP, Cloudflare, API Design, System Architecture &
              Design, Microservices
            </p>
          </div>
          <div class="">
            <a href="https://www.buymeacoffee.com/superdeveloper">
              <img
                src="@/assets/images/buymeacoffee-button.gif"
                style="width: 120px; border-radius: 15px"
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

          <div class="projects">
            <a href="https://topafrica.org" target="_blank">
              <h2>See Projects 👨🏾‍💻</h2>
            </a>
          </div>
        </div>
      </div>
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
  height: 350px;
  background-color: rgb(24, 24, 24);
  border-radius: 15px;
  padding: 35px;
}

.yellow {
  position: relative;
  background-color: rgb(2, 0, 8) !important;
}

.yellow > div * {
  color: white;
}

.container h3 {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 10px;
  color: white;
}

.container h2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.container p {
  color: white;
}

.projects {
  padding: 10px;
  border-radius: 15px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  background-color: rgba(255, 255, 255, 0.051);
}
.projects:hover {
  background-color: rgba(255, 255, 255, 0.082);
}

footer .copyright {
  display: grid;
  place-items: center;
  color: white;
  font-size: 12px;
}
</style>
