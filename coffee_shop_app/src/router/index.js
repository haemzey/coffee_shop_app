import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import OrderView from '../views/OrderView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/menu', name: 'Menu', component: MenuView },
  { path: '/order', name: 'Order', component: OrderView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
