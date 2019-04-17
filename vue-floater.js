import floater from './components/Floater'

const VueFloater = {
  install (Vue, _) {
    Vue.component(floater.name, floater)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFloater)
}

export default VueFloater
