import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    component: MainLayout,
    children: [
      { path: '', component: Home }
    ]
  },
  {
    path: '/sub',
    component: DefaultLayout,
    children: [
      { path: 'page1', component: () => import('../views/Page1.vue') },
      { path: 'page2', component: () => import('../views/Page2.vue') },
      { path: 'page3', component: () => import('../views/Page3.vue') },
      { path: 'page4', component: () => import('../views/Page4.vue') },
      { path: 'page5', component: () => import('../views/Page5.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router