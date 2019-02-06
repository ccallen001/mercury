import Firebase from 'firebase';

Firebase.initializeApp({
  apiKey: "AIzaSyDv4iUmkcKax9OkKWhO_alIF_LZ0oyxNAs",
  authDomain: "mercury-c236e.firebaseapp.com",
  databaseURL: "https://mercury-c236e.firebaseio.com",
  projectId: "mercury-c236e",
  storageBucket: "mercury-c236e.appspot.com",
  messagingSenderId: "82798854977"
});

import Vue from 'vue';

import router from './router';
import store from './store';
import './registerServiceWorker';

import App from './App.vue';

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const currentUser = Firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/signin');
  } else {
    next();
  }
});

Vue.config.productionTip = false;

let app = null;

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
