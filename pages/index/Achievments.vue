<template>
  <div class="page">
    <section class="container-grid">
      <div class="container white text-black">
          <div class="grid">
            <p>Experience</p>
            <h1>Software Engineer (8 years), Solutions Architect (4+ years)</h1>
          </div>
      </div>
      <div class="container white text-black">
          <div class="grid">
            <p>Core Stack</p>
            <h1>AWS, Python, Typescript, Cloudflare, NodeJS, Rust, C++, React, VueJS</h1>
          </div>
      </div>
      <div class="container white text-black">
          <div class="grid">
            <p>Proficiency</p>
            <h1>AWS Cloud, Cloudflare, API Design, Systems Design, Software Architecture, Distributed Systems</h1>
          </div>
      </div>

      <div class="container white text-black">
          <div class="grid">
            <p>Achievements</p>
            <h1>Co-founder/CEO @topuniverse, Founder & Solutions Architect @boltcliq, Building @swiftgo</h1>
          </div>
      </div>

      <div class="container white text-black">
          <div class="grid">
            <p>Recent Interests</p>
            <h1>Machine learning, Serverless Computing & Distributed Systems</h1>
          </div>
      </div>
      
    </section>
  </div>
</template>

<style scoped>

.grid {
  display: grid;
  gap: 10px;
  /* margin: 50px 0px; */
}

.container-grid {
  display: grid;
  gap: 30px;
  position: relative;
  padding-top: 5em;
}

.container {
  flex: 1;
  display: grid;
  align-items: center;
  width: 100%;
  border-radius: var(--input-border-radius) !important;
  padding: 50px;
  background: white;
  position: sticky;
  top: 100px;
  left: 0px;
  transition: all 500ms ease;
}
.container:hover {
  scale: 1.07;
  transition: all 500ms ease;
}

.container p {
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
}


.text-black * {
  color:  black;
}
.text-white * {
  color: white !important;
}

.container h1 {
  font-size: 60px;
  text-align: center;
  color: black 
}

@media (max-width: 1000px) {
  .container {
    padding: 20px;
    height: 60vh;
  }
  .container h1 {
    font-size: 30px;
  }
}

.container p {
  text-align: center;
  color: black 
}



.white {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
</style>
