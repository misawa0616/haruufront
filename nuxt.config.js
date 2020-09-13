
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
  css: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/redirect-module', [
      { from: '^/redirect-top', to: '/' },
    ]],
  ],
  plugins: ['~/plugins/axios'],
  build: {
  },
  axios: {
    baseURL: 'http://192.168.0.7:8000'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/rest_auth/login', method: 'post', propertyName: 'key' },
          logout: { url: '/api/v1/rest_auth/logout', method: 'post' }
        }
      }
    }
  },
}
