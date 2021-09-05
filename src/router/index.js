import { createRouter, createWebHashHistory } from 'vue-router'
import Todolist from '../views/Todolist.vue'

const routes = [
  {
    path: '/',
    name: 'Todolist',
    component: Todolist
  },
  {
    path: '/weather',
    name: 'Weather',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Weather.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
