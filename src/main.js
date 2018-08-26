import Vue from 'vue'
import App from './App.vue'
import BaseImg from './components/BaseImg'
import VueMoment from 'vue-moment'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Firebase from 'firebase';

Vue.use(Firebase)
Vue.use(Element)
Vue.use(VueMoment)

Vue.config.productionTip = false

Vue.component('base-img', BaseImg)

new Vue({
  render: h => h(App)
}).$mount('#app')
