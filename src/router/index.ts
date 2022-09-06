import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  // {
  //   path: '/folder/Dashboard',
  //   name: 'Accueil',
  //   component: () => import ('../views/DashBoardPage.vue')
  // },
  {
    path: '/folder/Dashboard',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
