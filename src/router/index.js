import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  
export default new Router({
  mode: 'history',
  routes: [
    {path:'/',name:'首页',component: () => import('@/components/Home.vue'),},                         // 斜杠代表根路径  ”component:Home“ 表示点击 "主页" 的时候会展示Home组件的内容
    {path:'/tzgg',name:'通知公共',component: () => import('@/components/tzgg.vue'),},
    {path:'/zyjs',name:'专业介绍',component: () => import('@/components/zyjs.vue'),},
    {path:'/zsjz',name:'招生简章',component: () => import('@/components/zsjz.vue'),},  
    {path:'/zsjh',name:'招生计划',component: () => import('@/components/zsjh.vue'),},     
    {path:'/lqcx',name:'录取查询',component: () => import('@/components/lqcx.vue'),},
    {path:'/xyfc',name:'校园风采',component: () => import('@/components/xyfc.vue'),},
    {path:'/bdzn',name:'报道指南',component: () => import('@/components/bdzn.vue'),},
    {path:'/lxwm',name:'联系我们',component: () => import('@/components/lxwm.vue'),},


    {path:'/xqy',name:'详情页',component: () => import('@/components/xqy.vue'),},
    {path:'/search',name:'搜索页',component: () => import('@/components/search.vue'),},
  ]
})
