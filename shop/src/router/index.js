import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import ClassIfication from '../components/ClassIfication'
import ShopCart from '../components/ShopCart'
import PersonalCenter from '../components/PersonalCenter'
import Details from '../components/subpage/Details'
import Choose from '../components/subpage/Choose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/Index')
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/classification',
      name: 'classification',
      component: ClassIfication
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: ShopCart
    },
    {
      path: '/personcalcenter',
      name: 'personcalcenter',
      component: PersonalCenter
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/choose',
      name: 'choose',
      component: Choose
    }
  ]
})
