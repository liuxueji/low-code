import Vue from 'vue'
import App from './App.vue'
import myComps from './components'

Vue.config.productionTip = false
Vue.use(myComps)

new Vue({
  render: h => h(App)
}).$mount('#app')
