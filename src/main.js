// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// 引入bootstrap
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// 引入icon
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
// 引入chart.js
import './assets/js/signalr.js'
// 引入动画
import './assets/animate/animate.min.css'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
//vue-cookies
// import VueCookies from 'vue-cookies'
// Vue.use(VueCookies)
// md5
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
// js-base64

// font-awsome
import 'font-awesome/css/font-awesome.min.css'
// ak
import ak from '@/assets/js/ak.js';
//cropper
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
/* eslint-disable no-new */
// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>',
  store,
})
Vue.config.devtools = true;