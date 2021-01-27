import { createRouter, createWebHistory } from '@ionic/vue-router';
import Activities from '../pages/Activities.vue';

const routes = [
  {
    path: '/',
    redirect: '/activities'
  },
  {
    path: '/activities',
    component: Activities
  },
  {
    path: '/activities/:id',
    component: () => import('../pages/ActivitiesDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
