import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  
export default new Router({
  // mode: 'history',
  routes: [
    {path:'/',name:'首页',component: () => import('@/components/Home.vue'),},                         // 斜杠代表根路径  ”component:Home“ 表示点击 "主页" 的时候会展示Home组件的内容
    {path:'/tzgg',name:'通知公共',component: () => import('@/components/tzgg.vue'), meta:{
      title: '通知公共',
       
    }},
    {path:'/zyjs',name:'学院介绍',component: () => import('@/components/zyjs.vue'),meta:{
      title: '学院介绍',
       
    }},
    {path:'/zsjz',name:'招生简章',component: () => import('@/components/zsjz.vue'),meta:{
      title: '招生简章',
       
    }},  
    {path:'/zsjh',name:'招生计划',component: () => import('@/components/zsjh.vue'),meta:{
      title: '招生计划',
       
    }},       
    {path:'/lqcx',name:'录取查询',component: () => import('@/components/lqcx.vue'),meta:{
      title: '录取查询',
      keepAlive: false
    }},  
    {path:'/xyfc',name:'校园风采',component: () => import('@/components/xyfc.vue'),meta:{
      title: '校园风采',
      keepAlive: false
    }},  
    {path:'/bdzn',name:'报道指南',component: () => import('@/components/bdzn.vue'),meta:{
      title: '报道指南',
      keepAlive: false
    }},  
    {path:'/lxwm',name:'联系我们',component: () => import('@/components/lxwm.vue'),meta:{
      title: '联系我们',
      keepAlive: false
    }},  


    {path:'/listpage/xqy',name:'/listpage/xqy',component: () => import('@/components/listpage/xqy.vue'),},
    {path:'/search',name:'搜索页',component: () => import('@/components/search.vue'),},
  ]
})
