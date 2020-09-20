
export default {
  vue: {
    devtools: true
  },
  mode: 'spa',
  target: 'server',
  head: {
    title: 'FavoriteTag',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/redirect-module', [
      { from: '^/redirect-top', to: '/' },
    ]],
    [
      '@nuxtjs/dotenv',
      { filename: process.env.NODE_ENV !== 'production' ? "./config/.env.dev" : "./config/.env.prod" }
    ]
  ],
  plugins: ['~/plugins/axios'],
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? "http://localhost:8000" : "https://favoritetag.xyz"
  },
}
