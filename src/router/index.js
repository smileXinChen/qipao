import Vue from 'vue'
import Router from 'vue-router'
// 登陆页面
import login from '@/components/login'
import newD from '@/components/new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/new',
      name: 'new',
      component: newD
    }

  ]
})
