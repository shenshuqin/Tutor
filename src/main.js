// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
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
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
// md5
import md5 from 'js-md5'
// js-base64

// font-awsome
import 'font-awesome/css/font-awesome.min.css'
// 权限拦截
import './permission'
// cropper
import VueCropper from 'vue-cropper'
/* eslint-disable no-new */
// 引入axios，并加到原型链中
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI) // You can also use <link> for styles
AOS.init()
Vue.prototype.$md5 = md5
Vue.use(VueCropper)
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>',
  store
})
Vue.config.devtools = true
