import { createRouter, createWebHistory } from 'vue-router'
import ListaLivrosView from '../views/ListaLivrosView.vue'
import DetailsLivroView from '@/views/DetailsLivroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListaLivros',
      component: ListaLivrosView,
    },
    {
      path: '/livro/:id',
      name: 'livro-details',
      component: DetailsLivroView,
    },
  ],
})

export default router
