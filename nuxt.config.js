
export default {
  mode: 'universal',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sejukata',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tulisan Berbicara, Hati Mendengar' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      // { rel: 'apple-touch-icon', type: 'image/png', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { as: "style", rel: 'stylesheet preload prefetch preconnect', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#53D0EC' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/applause-button.js',
    '~/plugins/vue-disqus.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa'
  ],
  fontawesome: {
    icons: {
      solid: ['faCommentDots', 'faEnvelope', 'faCircle', 'faChevronUp'],
      brands: ['faFacebookF', 'faTwitter', 'faLinkedin', 'faLine', 'faQuora', 'faTelegram', 'faWhatsapp']
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    'vue-social-sharing/nuxt',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master?access_token=${process.env.CDA_TOKEN}`,
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-windicss-preprocess',
        options: {
          config: "tailwind.config.js",  // tailwind config file path OR config object (optional)
          compile: false,                // false: interpretation mode; true: compilation mode
          globalPreflight: true,         // set preflight style is global or scoped
          globalUtility: false,           // set utility style is global or scoped
          prefix: 'windi-'               // set compilation mode style prefix
        }
      })
    }
  }
}
