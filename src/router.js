import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import BooksList from '@/views/BooksList'
import Houses from '@/views/Houses'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path:'/books',
      name: 'books',
      component: BooksList
    },
    {
      path:'/houses',
      name: 'houses',
      component:Houses
    }
  ]
})
export default router
