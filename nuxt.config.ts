// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-swiper",
    "@vuestic/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-purgecss",
    "nuxt-gtag",
    "@nuxtjs/robots"
  ],
  devServer: {
    host: '0.0.0.0',
    https: false,
  },
  site: {
    url: 'https://elevate8.co',
  },
  sitemap: {
    // exclude all URLs that start with /secret
    exclude: ['/team/**']
  },
  purgecss: {
    enabled: true, // Always enable purgecss
    safelist: [/nuxt/, /va/, /aos/], // Add my-class token to the safelist (e.g. .my-class)
  },
  gtag: {
    id: 'G-ZGWBH1GMH3'
  },
  vuestic: {
    config: {
      // Config here
    },
    css: false,
  },
  devtools: { enabled: true },
  // css: [
  //   '~/assets/sass/style.sass', 
  // ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Elevate8',
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon-64x64.png' },
        { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon-16x16.png' },
        { rel: "icon", type: "image/x-icon", href: "assets/images/favicon.png"},
        { rel: 'apple-touch-icon', type: 'image/png', href: 'assets/images/apple-touch-icon-180x180.png' },
        { rel: "stylesheet", href: "/assets/css/flaticon.min.css" },
        { rel: "stylesheet", href: "/assets/css/fontawesome-5.14.0.min.css" },
        { rel: "stylesheet", href: "/assets/css/select-dpd.min.css" },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/magnific-popup.min.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/slick.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.min.css" },
        { rel: "stylesheet", href: "/assets/css/custom.min.css" },
      ],
      meta: [
        { name: 'theme-color', content: '#7F4EFF' },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Elevate8" },
        { name: "og:site_name", content: "Elevate8" },
        { name: "og:image:alt", content: "Elevate8" },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
      ]
    },
  },
});