// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import axios from 'axios'
axios.defaults.baseURL =  process.env.BASE_API; // 关键步骤–填写后台请求统一的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
Vue.config.productionTip = false;
Vue.prototype.$http = axios; 
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   } 
//   router.addRoutes(routes)
// }) 
 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 
Vue.use(ElementUI)
import Common from '../src/js/common.js'
Vue.use(Common);


import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp)

import  'lib-flexible'

import promise from 'es6-promise';
promise.polyfill();

import './style/admin.css'
import './style/index.css'
import './style/leftright.css'
import './style/layui.css'
import './style/mobile.css'
import './icon/iconfont.css'
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
