import Vue from 'vue'
import VueFloater from '../vue-floater'
import Demo from './Demo'

Vue.use(VueFloater)

new Vue({
  el: '#app',
  render: h => h(Demo)
})
