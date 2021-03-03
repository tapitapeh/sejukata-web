
export default {
  mode: 'universal',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sejukata',
    titleTemplate: '%s — Sejukata',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tulisan Berbicara, Hati Mendengar' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { as: "style", rel: 'stylesheet preload prefetch preconnect', href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Lora:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap' },
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
    '@nuxtjs/google-analytics'
  ],
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
