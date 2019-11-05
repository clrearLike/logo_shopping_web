import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'login',
      redirect: '/users/login'
    },
    {
      path: '/users/login',
      name: 'login',
      component: ()=> import('../views/users/Login.vue')
    },
    {
      path: '/users/register',
      name: 'register',
      component: ()=> import('../views/users/Register.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: ()=> import('../views/leve1/Botnav.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: ()=> import('../views/leve1/Home.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: ()=> import('../views/leve1/List.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: ()=> import('../views/leve1/Cart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          component: ()=> import('../views/leve1/Mine.vue')
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
