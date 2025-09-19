// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Root',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/frmHome.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/frmHome.vue'),
  },
  {
    path: '/compass',
    name: 'Compass',
    component: () => import('@/views/frmCompass.vue'),
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () => import('@/views/frmAnalysis.vue'),
  },
  {
    path: '/aiglm',
    name: 'AiGlm',
    component: () => import('@/views/frmAiGlm.vue'),
  },
  {
    path: '/aiagent',
    name: 'AiAgent',
    component: () => import('@/views/frmAiAgent.vue'),
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('@/views/frmConfig.vue'),
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
