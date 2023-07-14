<template>
  <div>

    <section>

    <!-- header -->
    <div class="hero">
      <div>
        <h1 class="mb-2">Git & Github Mastery</h1>

        <p class="mb-4">Join our comprehensive git & gitHub expert class to gain a deep understanding
        of version control, collaboration, and seamless project management.</p>

        <div class="button-flex cta">
          <a href="#">
            Join The Training
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>

      </div>
        <img loading="lazy" class="avatar" src="@/assets/images/courses/github/6.webp" />
    </div>


    <!-- grid -->
    <div class="grey mt-5">
        <div class="grid">
            <div>
                <h4 class="mb-1">Git Fundamentals</h4>
                <p class="mb-2">
                    Learn the basics of Git version control, from setting up your local environment and initializing repositories to executing essential commands like add, commit, and branch creation.
                </p>
            </div>
            <div>
                <h4 class="mb-1">Advanced Git Techniques</h4>
                <p class="mb-2">
                    Dive deeper into Git with advanced topics such as resolving merge conflicts, utilizing rebasing, managing tags and releases, working with submodules, and implementing Git hooks for automation.
                </p>
            </div>

            <div>
                <h4 class="mb-1">GitHub Essentials</h4>
                <p class="mb-2">
                    Discover the power of GitHub as you explore repository management, collaborative workflows using pull requests, issue tracking, project management with GitHub Projects, and customizing repository settings.
                </p>
            </div>

            <div>
                <h4 class="mb-1">Advanced GitHub Strategies</h4>
                <p class="mb-2">
                    Take your GitHub skills to the next level by learning about automation with GitHub Actions and API integration, contributing to open source projects, conducting effective code reviews, and building your personal brand.
                </p>
            </div>

            <div>
                <h4 class="mb-1">GitHub Project Management</h4>
                <p class="mb-2">
                    Master the art of project management on GitHub, utilizing features like milestones, project boards, labels, and project automation to streamline team collaboration and enhance productivity.
                </p>
            </div>

            <div>
                <h4 class="mb-1">Optimization Tips</h4>
                <p class="mb-2">
                    Explore techniques for creating engaging and effective learning experiences, including concise and focused sessions, hands-on exercises, interactive elements, real-world examples, and supplementary resources.
                </p>
            </div>
        </div>
    </div>


    <!-- flexer -->
    <div class="flexer mt-5">
      <img loading="lazy" class="avatar mobile-hidden" src="@/assets/images/courses/github/1.webp" />
      <div>
        <h1 class="mb-1">Learn Git & Github for Free?</h1>
        <p class="mb-2">Mastering Git & GitHub enables developers to streamline workflow, enhance collaboration, maintain code integrity, and effectively manage projects</p>

        <div class="button-flex cta">
          <a href="https://gitdeveloperguide.solomonmarvel.com/">
            Browse Free Material
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>
    </div>

    <!-- flexer -->
    <div class="flexer mt-2">
        <div>
            <h1 class="mb-3">A better software professional</h1>

            <div class="mb-2 container">
                <p>
                    Enhanced Collaboration: Git and GitHub facilitate efficient teamwork and code sharing, improving collaboration among software engineers.
                </p>
            </div>

            <div class="mb-2 container">
                <p>
                    Open Source Impact: Mastery of Git and GitHub enables contributions to open source projects, fostering skill development and community engagement.
                </p>
            </div>
      </div>

        <img loading="lazy" class="avatar" src="@/assets/images/courses/github/5.webp" />
    </div>



    <div class="grey mt-5">
        <h2 class="center">Course Instructors</h2>
        <div class="flexer mt-2">
            <div class="container">
                <img loading="lazy" class="instructor" src="@/assets/images/courses/teachers/marv.png" />
                <p class="title mt-1">Marvelous Solomon</p>
                <p class="">Principal Software Engineer</p>
            </div>
            <div class="container">
                <img loading="lazy" class="instructor" src="@/assets/images/courses/teachers/bob.png" />
                <p class="title mt-1">Michael Esedo</p>
                <p class="">Senior Software Engineer</p>
            </div>
        </div>
    </div>



    <!-- flexer -->
    <div class="mt-5 grey">
        <div class="center">
            <h1 class="mb-3 mt-2">Git with Confidence</h1>
        </div>

        <div class="cta center">
          <a href="#" class="button-primary">
            Join The Training
          </a>
        </div>

    </div>

    </section>
  </div>
</template>

<script>
export default {
head: {
      title: "Swift Commerce",
      meta: [
        { property: "og:title", content: ">Git & Github Mastery" },
        { property: "og:description", content: "Join our comprehensive git & gitHub expert class" },
        { hid: 'og:image', property: 'og:image', content: "@/assets/images/courses/github/6.webp" },
      ],
    },
}

</script>


<style scoped>

.grey {
    background-color: #151515;
    padding: 3em;
    border-radius: 16px
}

.container {
    background-color: #151515;
    padding: 1.5em;
    border-radius: 16px
}

.hero {
  z-index: 100;
  justify-content: center;
  display: flex;
  place-items: center;
  gap: 20px;
  height: 100%;
  padding-top: 3em;
}



.flexer {
  z-index: 100;
  justify-content: center;
  display: flex;
  place-items: center;
  gap: 40px;
  height: 100%;
}

.flexer .container {
  z-index: 100;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

.flexer div .title {
    font-size: 18px;
    font-weight: 500;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px
}

.grid p {
    font-size: 12px;
    line-height: 1.4
}


.grid img {
    width: 35px;
    height: 35px
}


.cta a {
  font-size: 16px;
  color: var(--primary);
  display: flex;
  gap: 5px;
  place-items: center;
  border-radius: var(--border-radius);
  padding: 15px;
  background-color: #141414;
}

.cta a:hover {
  background-color: #272727;
}

.avatar {
    width: 100% !important;
    height: 100% !important;
  }


.cta img {
  height: 20px;
  width: 20px;
}


h1 {
  color: white;
  line-height: .9;
  font-size: 52px;
  letter-spacing: -2px;
}

p {
  font-size: 14px;
  line-height: 1.5;
}


.icons {
  width: 12px;
  height: 12px;
}


.instructor {
    width: 200px;
    height: 200px
}


@media (max-width: 1000px) {

.hero {
    padding-top: 2em;
    flex-direction: column-reverse !important;
	place-items: center;
  }

  .flexer {
    padding-top: 2em;
    flex-direction: column-reverse !important;
	place-items: center;
  }


  h3 {
    width: 100%;
    line-height: 1.2;
    font-size: 20px;
  }

  .hero p {
    width: 100%;
  }

  .spin {
    right: 0px;
  }
}

.bringtofront {
  position: absolute;
  z-index: 99;
  top: 50px;
  left: 50px;
}

.bringtofront {
  color: white;
}

@media (max-width: 768px) {
    .mobile-hidden {
        display: none
    }

    .hero div {
        text-align: center;
        display: grid;
        place-items: center;
    }

    .flexer div {
        text-align: center;
        display: grid;
        place-items: center;
    }
}
</style>
