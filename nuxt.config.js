export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Marvelous Akporowho",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      { hid: "description", name: "description", content: "Technical Leader | Solutions Architect | Software Engineer", },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og:image", property: "og:image", content: `https://solomonmarvel.com/ogimage.png`, },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {rel: "stylesheet", href: "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"}
    ],
    script: [
      {hid: "ajax", src: "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/3.0.2/es6-promise.min.js"},
      {hid: "ajax", src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.min.js"},
      {hid: "linkedin badge", src: "https://platform.linkedin.com/badges/js/profile.js"},
      {hid: "github calendar", src: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"},
      {hid: "github calendar", src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/highlight.min.js"}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/app.css",
    "~/assets/css/fonts.css",
    "~/assets/css/utility.css",
    "~/assets/css/variables.css",
    "~/assets/css/form.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/moment"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['nuxt-apache-config',
      {
        https: true,
        redirection: true,
        redirectUrl: '404.html',
        indexes: true,
        onlyGET: true,
      }
    ] ,
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api.solomonmarvel.com",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Marvelous Akporowho',
      lang: 'en',
      useWebmanifestExtension: false
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

};
