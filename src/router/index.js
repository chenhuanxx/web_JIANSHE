import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  
export default new Router({
  routes: [
    {path:'/',component: () => import('@/components/Home.vue'),},                         // 斜杠代表根路径  ”component:Home“ 表示点击 "主页" 的时候会展示Home组件的内容
    {path:'/menu',component: () => import('@/components/Menu.vue'),},                     //跳转到Menu组件
    {path:'/admin',component: () => import('@/components/Admin.vue'),},
    {path:'/announcement',component: () => import('@/components/announcement.vue'),},
    {path:'/login',component: () => import('@/components/Login.vue'),},
    {path:'/register',component: () => import('@/components/Register.vue'),},
  ]
})
