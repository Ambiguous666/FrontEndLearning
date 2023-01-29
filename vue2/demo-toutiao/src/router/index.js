import Vue from 'vue'
import VueRouter from 'vue-router'

import myHome from '@/views/Home/myHome.vue'
import myUser from '@/views/User/myUser.vue'

Vue.use(VueRouter)

const routes = [
  // 定义首页的路有规则
  { path: '/', component: myHome },
  { path: '/user', component: myUser }
  // 定义我的的路有规则
]

const router = new VueRouter({
  routes
})

export default router
