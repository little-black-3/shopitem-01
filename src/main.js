import Vue from 'vue';
import App from '@/App'

Vue.config.pruductionTip=false;

new Vue({
  el:'#app',
  render:h=>h(App)
})