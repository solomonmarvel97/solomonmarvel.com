// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Marvelous Solomon",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Software Engineer | AI/NLP Engineer | Solutions Architect | Mentor",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#53ff70" },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://solomonmarvel.com/ogimage.png`,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css",
        },
      ],
      script: [
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/3.0.2/es6-promise.min.js",
        },
        {
          hid: "twitter",
          src: "https://platform.twitter.com/widgets.js",
        },
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.min.js",
        },
        {
          hid: "github calendar",
          src: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js",
        },

        {
          hid: "luma-checkout",
          src: "https://embed.lu.ma/checkout-button.js",
        },
      ],
    },
  },
});
