<template>
  <footer>
    <div class="container-grid mt-5">
      <div class="container yellow">
        <div>
          <div class="grid">
            <h1>Experience</h1>
            <p>Software Programmer (12+) Years</p>
          </div>
          <div class="grid">
            <h1>Core Stack</h1>
            <p>
              AWS, Azure, Python, Cloudflare, NodeJS, Rust, C++, Javascript, React, VueJS, Flutter
            </p>
          </div>
          <div class="grid">
            <h1>Proficiency</h1>
            <p>AWS Cloud, Cloudflare, API Design, Systems Design, Software Architecture, Microservices Implementation
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="grid">
          <h1>Achievements</h1>
          <p>Co-founder/CEO @topuniverse</p>
          <p>Founder & Solutions Architect @boltcliq</p>
          <p>Technical Consultant @topafrica</p>
        </div>
        <div class="grid">
          <h1>Interest</h1>
          <p>Software Architecture, Systems Design, Cloud Computing, Serverless, Edge Computing, Microservices &
            Artificial intelligence</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 10px;
  margin: 20px 0px;
}

.container-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.container {
  display: grid;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 35px;
  background: #53535329;
  border: 1px solid rgba(22, 22, 22, 0.456)
}

.container:hover {
  box-sizing: border-box;
  border: 1px solid rgba(16, 255, 231, 0.322)
}



.yellow>div * {
  color: white;
}

.container h3 {
  font-size: 14px;
  letter-spacing: 3px;
  margin-bottom: 10px;
  color: white;
}

.container h2 {
  font-size: 20px;
  color: white;
}

.container p {
  color: white;
}

.projects {
  padding: 10px;
  border-radius: 20px;
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

.yellow {
  background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
  border: none
}

.yellow:hover {
  border: none;
}

.yellow > div > div > h1 {
  color: black !important
}
.yellow > div > div > p {
  color: black !important
}
</style>
