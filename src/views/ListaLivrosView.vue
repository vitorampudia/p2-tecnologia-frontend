<script lang="ts">
import axios from 'axios'
import LivroCard from '@/components/LivroCard.vue'

export default {
  name: 'ListaLivrosView',
  components: { LivroCard },
  data() {
    return {
      next: '',
      total: null,
      livros: null,
    }
  },
  methods: {
    async listarLivros() {
      const api = axios.create({ baseURL: 'https://gutendex.com/books/' })
      try {
        const resposta = await api.get('')
        this.livros = resposta.data.results
        this.total = resposta.data.count
      } catch (erro) {
        console.error(erro)
      }
    },
  },
  mounted() {
    this.listarLivros()
  },
}
</script>

<template>
  <div class="container mt-4">
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <b-col
        v-for="livro in livros" 
        :key="livro.id" 
        class="d-flex align-items-stretch justify-content-center mb-4"
      >
        <LivroCard :livro="livro"/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
</style>