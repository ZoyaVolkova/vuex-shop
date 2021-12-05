import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import App from './App.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Liked from './components/Liked.vue'

Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart },
  { path: '/liked', component: Liked },
]

// Register routes
const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store,
})
