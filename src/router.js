import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('./views/index.vue'),
      children:[
          {
            path: '',
            redirect: '/home'
          },
          {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
          },
          {
            path: '/order',
            name: 'order',
            component: () => import('./views/Order.vue')
          },
          {
            path: '/me',
            name: 'me',
            component: () => import('./views/Me.vue')
          },
          {
            path: '/addresss',
            name: 'addresss',
            component: () => import('./views/Addresss.vue')
          },
          {
            path: '/city',
            name: 'city',
            component: () => import('./views/City.vue')
          },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
  ]
});

//路由守卫
router.beforeEach((to,from,next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if(to.path == '/login'){
    next();
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router;
