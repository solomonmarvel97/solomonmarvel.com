<template>
  <div class="page">
    <section class="container-grid">
      <div class="container black text-white">
          <div class="grid">
            <p>Experience</p>
            <h1>Software Engineer (8 years), Solutions Architect (4+ years)</h1>
          </div>
      </div>
      <div class="container red text-white">
          <div class="grid">
            <p>Core Stack</p>
            <h1>AWS, Python, Typescript, Cloudflare, NodeJS, Rust, C++, React, VueJS</h1>
          </div>
      </div>
      <div class="container yellow text-black">
          <div class="grid">
            <p>Proficiency</p>
            <h1>AWS Cloud, Cloudflare, API Design, Systems Design, Software Architecture, Distributed Systems</h1>
          </div>
      </div>

      <div class="container white text-black">
          <div class="grid">
            <p>Achievements</p>
            <h1>Co-founder/CEO @topuniverse, Founder & Solutions Architect @boltcliq, Technical Consultant @topafrica</h1>
          </div>
      </div>

      <div class="container black text-white">
          <div class="grid">
            <p>Recent Interests</p>
            <h1>Machine learning, Serverless Computing & Distributed Systems</h1>
          </div>
      </div>
      
    </section>
  </div>
</template>

<style scoped>
.page {
    background-color: black;
}
.grid {
  display: grid;
  gap: 10px;
  margin: 50px 0px;
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

.container p::before {
  content: ' - '
}

.container p::after {
  content: ' - '
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
.container p {
  text-align: center;
  color: black 
}

.white {
  background: white;
}
.red {
  background-image: linear-gradient( 109.6deg,  rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2% );
}

.black {
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
}

.yellow {
  background-image: linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,253,0,1) 100.2% );
}
</style>
