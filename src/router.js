import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from './views/HomeView.vue'
import BillsView from './views/BillsView.vue'
import BillView from "./views/BillView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/bills', component: BillsView },
  { path: '/bills/:congress/:type/:number', component: BillView},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router