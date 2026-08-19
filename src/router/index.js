import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // On router.back(), restore the exact scroll position like a browser back button
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
