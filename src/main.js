import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'buefy/dist/buefy.css'

// internal icons
import {
  faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload)

Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.use(Buefy) // Not a fan of importing entire library. Investigate for tree shaking option

// ConfigProgrammatic.setOptions({
//   defaultIconComponent: 'vue-fontawesome',
//   defaultIconPack: 'fas'
// })

Vue.config.productionTip = false
if (process.env.VUE_APP_DEBUG === 'true') {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
