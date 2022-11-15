<template>
  <section>
    <div class="container-grid mt-5">
      <div class="container white">
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
  </section>
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
  border-radius: var(--input-border-radius) !important;
  padding: 35px;
  background: #53535329;
}

.container:hover {
  box-sizing: border-box;
}



.white>div * {
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

.white {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.white > div > div > h1 {
  color: black !important
}
.white > div > div > p {
  color: black !important
}
</style>
