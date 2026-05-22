import { createRouter, createWebHistory } from 'vue-router'
import ListaLivrosView from '../views/ListaLivrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListaLivros',
      component: ListaLivrosView,
    },
  ],
})

export default router
