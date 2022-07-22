import Vue from "vue";
import App from "./App.vue";
import LxjUi from "lxj-ui"
import 'lxj-ui/dist/lxj-ui.css'
Vue.use(LxjUi)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");