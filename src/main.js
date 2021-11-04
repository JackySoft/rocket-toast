import Vue from 'vue'
import App from './App.vue'
// import RocketToast from './../packages/index'
// import './assets/normalize.scss'
import RocketToast from 'rocket-toast'
import 'rocket-toast/lib/rocket-toast.css'

Vue.config.productionTip = false

Vue.use(RocketToast);
new Vue({
  render: h => h(App),
}).$mount('#app')
