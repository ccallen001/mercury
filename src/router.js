import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Signup from './views/Signup.vue';
import Signin from './views/Signin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ]
});
