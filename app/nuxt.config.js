export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Academic',
    'Timing-Allow-Origin': '*',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *; img-src 'self' data: *",
      },
      {
        name: 'description',
        content:
          'Primer plataforma digital con las mejores ofertas académicas en México.',
      },
      {
        name: 'facebook-domain-verification',
        content: 'tgtq8hw39hf35pslddi1iewidkdrmw',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Pixel dynamic' },
      { name: 'theme-color', content: '#4DBA87' },
      { name: 'msapplication-TileImage', content: '/icons/152.png' },
      { name: 'msapplication-TileColor', content: '#000000' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/icons/32.png' },
      { rel: 'icon', type: 'image/png', href: '/icons/16.png' },
      { rel: 'apple-touch-icon', href: '/icons/152.png' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#4DBA87',
      },
    ],
  },
  env: {
    backend: process.env.NUXT_ENV_BACKEND_ACADEMIC,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/app.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
      },
    ],
    'nuxt-sweetalert2',
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        pixelId: '730070381105975',
        autoPageView: true,
      },
    ],
  ],
  pwa: {
    icon: {
      source: '/64.png',
      purpose: 'maskable',
      fileName: '64.png',
    },
    manifest: {
      name: 'Academic',
      lang: 'es',
      useWebmanifestExtension: false,
      start_url: '/?standalone=true',
      theme_color: '#4DBA87',
    },
    workbox: {
      enabled: false,
    },
  },
  bootstrapVue: {
    components: [
      'BIcon',
      'BIconArrowLeft',
      'BIconArrowRight',
      'BIconBezier',
      'BIconBezier2',
      'BIconBagCheck',
      'BIconPhone',
      'BIconAward',
      'BIconBoundingBox',
      'BIconCheckCircleFill',
      'BIconCash',
      'BIconEnvelope',
      'BIconPerson',
    ],
    componentPlugins: [
      'LayoutPlugin',
      'ButtonPlugin',
      'NavbarPlugin',
      'OverlayPlugin',
      'NavPlugin',
      'FormPlugin',
      'FormGroupPlugin',
      'FormInputPlugin',
      'FormSelectPlugin',
      'FormCheckboxPlugin',
      'ModalPlugin',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: process.env.NUXT_ENV_BACKEND_ACADEMIC,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true,
    },
  },
}
