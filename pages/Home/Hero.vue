<template>
    <div>
        <section class="mt-2 hero">
            <div>

                <h1 class="mb-3">Marvelous Solomon</h1>
                <p>
                    Ex Principal SDE | Building startups @The Boltcliq Company | AI Enthusiast | Generative AI @swift
                    commerce | Senior Solutions Architect @FCMB | Cloud/DevOps Mentor @betakopa | Serial Entrepreneur

                </p>

                <div class="button-flex cta mt-4">
                    <a href="/consulting">
                        Consulting
                        <img src="@/assets/icons/link.svg" alt="" />
                    </a>

                    <a href="https://calendly.com/boltcliq/build-with-us?ref=blog.boltcliq.com"
                        target="_blank">
                        Connect
                        <img src="@/assets/icons/link.svg" alt="" />
                    </a>
                </div>
            </div>



            <div class="spin">
                <img class="avatar-wrapper" src="@/assets/images/rotate.svg" />
                <img loading="lazy" class="avatar" src="@/assets/images/avatar/me.png" />
            </div>

        </section>

        <div class="mb-4 socials">
            <a target="_blank" href="https://linkedin.com/in/superdeveloper">
                <img src="@/assets/icons/social/linkedin.svg" />
                Linkedin
            </a>
            <a target="_blank" href="https://twitter.com/solomonmarvel97">
                <img src="@/assets/icons/social/twitter.svg" />
                Twitter
            </a>
            <a target="_blank" href="https://github.com/solomonmarvel97">
                <img src="@/assets/icons/social/github.svg" />
                Github
            </a>
            <a target="_blank" href="https://openprofile.dev/profile/superdeveloper">
                <img src="@/assets/icons/social/lf.png" />
                Linux Foundation
            </a>
        </div>
        <div class="center">
            <iframe src="https://player.twitch.tv/?channel=solomonmarvel&parent=www.solomonmarvel.com" frameborder="0"
                scrolling="no" allowfullscreen="true" allow="autoplay; fullscreen"
                class="mb-5 custom-twitch-iframe"></iframe>
        </div>

    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.custom-twitch-iframe {
    width: 100%;
    max-width: 100%;
    height: 500px !important;
    margin: 0 auto;
    margin-bottom: 3em;
}

.hero {
    z-index: 100;
    justify-content: space-between;
    display: flex;
    place-items: center;
    gap: 20px;
    height: 100%;
    padding: 5em 0;
    padding-top: 8em
}

.hero>div {
    display: grid;
    place-items: center
}

.cta a {
    font-size: 20px;
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


.cta img {
    height: 25px;
    width: 25px;
}

h1 {
    color: #fefefe;
    line-height: .8;
    font-weight: 900;
    letter-spacing: -6px;
    font-size: 150px;
    text-align: center
}

@keyframes textShine {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.hero p {
    width: 60%;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
}

.socials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
}

.socials img {
    height: 20px;
    width: 20px;
    object-fit: cover;
}

.socials a {
    font-size: 16px;
    display: flex;
    gap: 5px;
    place-items: center;
    padding: 5px 8px;
    border-radius: var(--border-radius);
}

.socials a:hover {
    background-color: rgba(255, 255, 255, 0.109);
}

.icons {
    width: 12px;
    height: 12px;
}


.hero .cta_blog {
    height: 65px;
    border-radius: var(--border-radius);
    background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
    color: white;
    display: grid;
}

.hero .cta_github {
    height: 65px;
    display: grid;
    opacity: 0.73;
    border-radius: var(--border-radius);
    background-color: #f0f0f0;
}


@media (max-width: 1000px) {

    .custom-twitch-iframe {
        width: 100%;
        height: 250px !important;
    }

    .hero {
        padding-top: 6em;
        flex-direction: column-reverse !important;
        place-items: center;
    }

    h1 {
        width: 100%;
        font-size: 54px;
        letter-spacing: -2px
    }

    h3 {
        width: 100%;
        line-height: 1.2;
        font-size: 20px;
    }

    .hero p {
        width: 100%;
    }

    .hero .avatar {
        width: 100%;
        height: auto;
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
</style>
