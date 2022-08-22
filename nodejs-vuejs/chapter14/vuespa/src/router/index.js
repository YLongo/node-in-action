import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Beijing from '@/components/Beijing'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/beijing',
      name: 'beijing',
      component: Beijing
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
