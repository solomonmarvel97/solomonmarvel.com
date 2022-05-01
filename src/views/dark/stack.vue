<template>
  <div class="mt-10">
    <div class="mb-2">
      <div class="inner-grid">
        <div>
          <h3>EXPERIENCE:</h3>
          <p>Computer Programmer (11+)</p>
        </div>
        <div>
          <h3>STACK:</h3>
          <p>NodeJS, Python, Javascript, C++, Perl, Rust, VueJS, Flutter</p>
        </div>
      </div>
    </div>
    <div>
      <h3>PROFICIENCY:</h3>
      <p>
        aws, azure, gcp, cloudflare, api design, system design, system
        architecture design, microservices
      </p>
    </div>
  </div>
</template>

<style scoped>
.inner-grid {
  display: grid;
  align-items: center;
  width: 900px;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 768px) {
  .inner-grid {
    width: 100%;
  }
}

h3 {
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: white;
}

p {
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: white;
}
</style>
