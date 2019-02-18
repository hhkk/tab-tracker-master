// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// note that app and apphbk imports are below see github dec 19 2018
import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

// runs in the browser

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
import Applrb3x from './Applrb2' // this links to Applrb2.vue
new Vue({
  el: '#applrb3y',
  router,
  store,
  template: '<Applrb3x/>',
  components: { Applrb3x }
})

// /* eslint-disable no-new */
// import AppHbk from './AppHbk'  // this links to AppHbk.vue
// new Vue({
//   el: '#appHbk', // or app
//   router,
//   store,
//   template: '<AppHbk/>',
//   components: { AppHbk }
// })
