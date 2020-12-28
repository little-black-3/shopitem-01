import Vue from 'vue';
import App from '@/App'

import router from '@/router';
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
import store from '@/store'

import 'swiper/css/swiper.css';
import '@/mock/mockServer'

Vue.config.productionTip=false;

Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  el:'#app',
  render:h=>h(App),
  router,
  store
})