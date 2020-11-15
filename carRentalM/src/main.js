import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset'; //样式重置
import {obj} from './assets/js/rem'; //自适应
import 'font-awesome/css/font-awesome.min.css'; //字体库

//axios 异步请求
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted(){
    // 自适应
    obj.setRem();
    window.onresize = obj.setRem;
  },
  render: h => h(App)
}).$mount('#app')
