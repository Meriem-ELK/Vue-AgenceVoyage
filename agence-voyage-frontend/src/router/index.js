import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Apropos from '../views/apropos.vue'
import Forfaits from '../views/Forfaits.vue'
import DetailsForfait from '../views/DetailsForfait.vue'
import EditForfait from '../views/EditForfait.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/forfaits',
    name: 'Forfaits',
    component: Forfaits
  },
  {
    path: '/forfait/:id',
    name: 'detail-forfait',
    component: DetailsForfait
  },
  {
    path: '/forfait/:id/edit',
    name: 'edit-forfait',
    component: EditForfait
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;