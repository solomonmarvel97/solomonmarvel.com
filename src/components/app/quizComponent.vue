<template>
  <!-- The quiz section -->
  <div class="table glass">
    <!-- The time section -->
    <div class="time">
      <div>
        <h1>00:40</h1>
      </div>
      <div class="level">
        <span>30% complete</span>
        <div><span></span></div>
      </div>
    </div>
    <!-- The time section end -->

    <!-- The question section -->
    <div class="question">
      <h2>What is an Airtable base ?</h2>
    </div>
    <!-- The question section end -->

    <!-- The option section -->
    <div class="option-container">
      <div class="option">
        <div><p>A</p></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            euismod tincidunt tincidunt quam sed pulvinar.
          </p>
        </div>
      </div>

      <div class="option">
        <div><p>B</p></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            consectetur adipiscing elit. Enim euismod tincidunt tincidunt
            quam sed pulvinar.
          </p>
        </div>
      </div>

      <div class="option">
        <div><p>C</p></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            consectetur adip Enim euismod tincidunt tincidunt quam sed
            pulvinar.
          </p>
        </div>
      </div>

      <div class="option">
        <div><p>D</p></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing consectetur
            adipiscing elit. elit. Enim euismod tincidunt quam sed pulvinar.
          </p>
        </div>
      </div>
    </div>
    <!-- The option section end -->
  </div>
  <!-- Quiz end -->
</template>

<style scoped>
.description {
  width: 70%;
  height: auto;
  margin-bottom: 48px;
}

@media (max-width: 1100px) {
  .level span {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .description {
    width: 100%;
  }

  h1 {
    margin-bottom: 40px
  }

;
}

.description h1 {
  font-weight: normal;
  font-size: 25px;
  line-height: 31px;
  color: #dfdfdf;
  margin-bottom: 17px;
}

.description p {
  font-weight: lighter;
  font-size: 16px;
  line-height: 20px;
  color: #dfdfdf;
}

.table {
  width: 100%;
  height: auto;
  padding: 25px;
}

/* The time section */

.time {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 50px;
}

.time h1 {
  font-weight: bold;
  font-size: 50px;
  line-height: 63px;
  color: #dfdfdf;
}

.level {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.level span {
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;
  color: #dfdfdf;
}

.level div {
  position: relative;
  width: 250px;
  height: 16px;
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.08);
}

.level div span {
  width: 50%;
  height: 16px;
  border-radius: var(--border-radius);
  background: linear-gradient(98.96deg, #f86161 24.48%, #e606a7 86.69%);
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 0;
}

/* The time section end */

/* question section */
.question h2 {
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: #dfdfdf;
}

.question {
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 62px;
}

/* question section end */

/* The option section */
.option-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-row-gap: 10px;
  padding-bottom: 24px;
}

.option {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 90%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius);
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px
}

.option div:nth-child(1) {
  justify-self: center;
}

.option p {
  font-weight: normal;
  font-size: 16px;

  color: #dfdfdf;
}

.time {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.level {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
