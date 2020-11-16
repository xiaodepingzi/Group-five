import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //客服中心
  {
    path: '/kefuzhongxin',
    name: 'kefuzhongxin',
    component: () => import('../components/lcx_jingtai/kefuzhongxin.vue')
  },
  // 设置
  {
    path: '/shezhi',
    name: 'shezhi',
    component: () => import('../components/lcx_jingtai/shezhi.vue')
  },
  // 服务规则
  {
    path: '/fuwuguize',
    name: 'fuwuguize',
    component: () => import('../components/lcx_jingtai/fuwuguize.vue')
  },
  // 我的订单
  {
    path: '/wodedingdan',
    name: 'wodedingdan',
    component: () => import('../components/lcx_jingtai/wodedingdan.vue')
  },
  // 评价
  {
    path: '/pingjia',
    name: 'pingjia',
    component: () => import('../components/lcx_jingtai/pingjia.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
