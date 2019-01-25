import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login,
      props: true
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})
