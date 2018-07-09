const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  plugins: [{src:'~plugins/vue-scrollto.js'},
  {src:'~plugins/vue-tooltip.js'},
  {src: '~/plugins/vue-gallery.js', ssr: false}
  // {src:'~plugins/vue-leaflet.js'},
],

  /*
  ** Plugins to load before mounting the App
  */


  /*
  ** Nuxt.js modules
  */
  modules: [
    
      
      'nuxt-leaflet'
  
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
     
      
    },
    vendor: 
      ['gsap','vue-gallery']
  
  }
}
