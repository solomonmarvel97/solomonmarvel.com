<template>
  <div class="page">
    <section class="container-grid">
      <div class="container">
          <div class="grid">
            <p>Experience</p>
            <h1>Software Engineer (8 years), Solutions Architect (4+ years)</h1>
          </div>
      </div>
      <div class="container">
          <div class="grid">
            <p>Core Stack</p>
            <h1>AWS, Python, Typescript, Cloudflare, NodeJS, Rust, C++, React, VueJS</h1>
          </div>
      </div>
      <div class="container">
          <div class="grid">
            <p>Proficiency</p>
            <h1>AWS Cloud, Cloudflare, API Design, Systems Design, Software Architecture, Distributed Systems</h1>
          </div>
      </div>

      <div class="container">
          <div class="grid">
            <p>Achievements</p>
            <h1>Co-founder/CEO @topuniverse, Founder & Solutions Architect @boltcliq, Building @swiftgo</h1>
          </div>
      </div>

      <div class="container">
          <div class="grid">
            <p>Recent Interests</p>
            <h1>Machine learning, Serverless Computing & Distributed Systems</h1>
          </div>
      </div>

      <div class="container">
          <div class="grid">
            <p class="mb-2">2023 Certifications</p>
            <div class="flex">
              <a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/cb6ac2ff-18f6-49a4-b2f5-85ffa18756a8/badges/3824954">Introduction to Generative AI</a>
              <a target="_blank" href="https://www.deeplearning.ai/short-courses/">ChatGPT Prompt Engineering For Developers</a>
              <a target="_blank" href="https://www.deeplearning.ai/short-courses/">Building Systems with the ChatGPT API</a>
              <a target="_blank" href="https://www.deeplearning.ai/short-courses/">LangChain for LLM Application Development</a>
              <a target="_blank" href="https://www.deeplearning.ai/short-courses/">How Diffusion Models Work</a>
              <a target="_blank" href="https://www.linkedin.com/learning/introducing-semantic-kernel-building-ai-based-apps/introducing-semantic-kernel">Introducing Semantic Kernel: Building AI-Based Apps</a>
              <a target="_blank" href="https://www.linkedin.com/learning/postman-essential-training-21969591">Postman Essential Training</a>

            </div>
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
  background: #1e1e1e;
  position: sticky;
  top: 100px;
  left: 0px;
  transition: all 300ms ease;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.container:hover {
  scale: 1.07;
  transition: all 300ms ease;
  background: #101010;
}

.container p {
  text-transform: uppercase;
  letter-spacing: 3px;
}

.container .flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
}

.container .flex a {
  text-decoration: underline;
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
}



.white {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
</style>
