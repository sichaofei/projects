// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'	//注意，此处样式要单独引入。
import VueAwesomeSwiper from 'vue-awesome-swiper'
require("swiper/dist/css/swiper.css");
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
