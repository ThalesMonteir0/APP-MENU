import {createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Address from '../views/FormAddress.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/cart', component: Cart, name: 'cart' },
  { path: '/address', component: Address, name: 'address' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;