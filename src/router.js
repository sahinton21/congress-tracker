import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from './views/HomeView.vue'
import BillsView from './views/BillsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/bills', component: BillsView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router