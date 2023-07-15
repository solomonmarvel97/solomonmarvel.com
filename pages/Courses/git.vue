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
            15th July, 2023
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>

      </div>
        <img loading="lazy" class="avatar" src="@/assets/images/courses/github/6.webp" />
    </div>


    <!-- grid -->
    <div class="mt-5">
        <div class="grid">
            <div class="container">
                <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/1.svg" />
                <h4 class="mb-1">Git Fundamentals</h4>
                <p>
                    Learn the basics of Git version control, from setting up your local environment and initializing repositories to executing essential commands like add, commit, and branch creation.
                </p>
            </div>
            <div class="container">
            <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/2.svg" />
                <h4 class="mb-1">Advanced Git Techniques</h4>
                <p>
                    Dive deeper into Git with advanced topics such as resolving merge conflicts, utilizing rebasing, managing tags and releases, working with submodules, and implementing Git hooks for automation.
                </p>
            </div>

            <div class="container">
            <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/3.svg" />
                <h4 class="mb-1">GitHub Essentials</h4>
                <p>
                    Discover the power of GitHub as you explore repository management, collaborative workflows using pull requests, issue tracking and project management with GitHub Projects.
                </p>
            </div>

            <div class="container">
            <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/4.svg" />
                <h4 class="mb-1">Advanced GitHub Strategies</h4>
                <p>
                    Take your GitHub skills to the next level by learning about automation with GitHub Actions and API integration, contributing to open source projects, conducting effective code reviews.
                </p>
            </div>

            <div class="container">
            <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/5.svg" />
                <h4 class="mb-1">GitHub Project Management</h4>
                <p>
                    Master the art of project management on GitHub, utilizing features like milestones, project boards, labels, and project automation to streamline team collaboration.
                </p>
            </div>

            <div class="container">
            <img loading="lazy" class="mb-1" src="@/assets/images/courses/github/icons/6.svg" />
                <h4 class="mb-1">Optimization Tips</h4>
                <p>
                    Explore techniques for creating engaging and effective learning experiences, including hands-on exercises, interactive elements and real-world examples.
                </p>
            </div>
        </div>
    </div>

    <!-- flexer -->
    <div class="flexer mt-5">
      <div>
        <h1 class="mb-1">Learn Git for Free?</h1>
        <p class="mb-2">Mastering Git & GitHub enables developers to streamline workflow, enhance collaboration, maintain code integrity, and effectively manage projects</p>

        <div class="button-flex cta">
          <a href="https://gitdeveloperguide.solomonmarvel.com/">
            Read The Material
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>
      <img loading="lazy" class="avatar mobile-hidden" src="@/assets/images/courses/github/git.png" />
    </div>


    <!-- flexer -->
    <div class="flexer mt-5">
      <img loading="lazy" class="avatar mobile-hidden" src="@/assets/images/courses/github/1.webp" />
      <div>
        <h1 class="mb-1">Learn Github for Free?</h1>
        <p class="mb-2">Mastering Git & GitHub enables developers to streamline workflow, enhance collaboration, maintain code integrity, and effectively manage projects</p>

        <div class="button-flex cta">
          <a href="#">
            Read The Material
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>
    </div>

    <!-- flexer -->
    <div class="flexer mt-2">
        <div>
            <h1 class="mb-3">Better software practitioner</h1>

            <div class="mb-2 container">
                <p>
                    Open Source Impact: Mastery of Git and GitHub enables contributions to open source projects, fostering skill development and community engagement.
                </p>
            </div>
      </div>

        <div>
            <h1 class="mb-3">Better team Collaborator</h1>

            <div class="mb-2 container">
                <p>
                    Enhanced Collaboration: Git and GitHub facilitate efficient teamwork and code sharing, improving collaboration among software engineers.
                </p>
            </div>
      </div>
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
            15th July, 2023
          </a>
        </div>

    </div>

    </section>
  </div>
</template>

<script>
export default {
layout: 'web',
head: {
      title: "Git & Github Mastery",
      meta: [
        { property: "og:title", content: "Git & Github Mastery" },
        { property: "og:description", content: "Join our comprehensive git & gitHub expert class" },
        { hid: 'og:image', property: 'og:image', content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmtPhsZP0OZ0JpKeKxvSsmsVYZCb-1KgkRmb5lY5N_sExIF1lHqmDqgJKI5HtscN8zfg&usqp=CAU" },
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
    padding: 1.3em;
    border-radius: 16px
}

.hero {
  z-index: 100;
  justify-content: center;
  display: flex;
  place-items: center;
  gap: 20px;
  height: 100%;
  padding-top: 6em;
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px
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

div .avatar {
    max-width: 400px !important;
    max-height: 400px !important;
    object-fit: cover;
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
    padding-top: 6em;
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
