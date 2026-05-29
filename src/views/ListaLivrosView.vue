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
  < <div class="container mt-4 d-flex flex-column align-items-center">
        <b-row class="g-3 justify-content-center">
            <b-col
                v-for="livro in livros"
                :key="livro.id"
            >
                <LivroCard :livro="livro"/>
            </b-col>
        </b-row>
    </div>
    
</template>

<style scoped>
</style>