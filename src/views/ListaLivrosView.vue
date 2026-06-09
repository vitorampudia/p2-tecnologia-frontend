<script lang="ts">
import axios from 'axios'
import LivroCard from '@/components/LivroCard.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ListaLivrosView',
  components: { LivroCard, Header, Footer },
  data() {
    return {
      next: '',
      total: null,
      livros: null,
      busca: '',
      categorias: [
        'Todos',
        'fiction',
        'philosophy',
        'history',
        'poetry',
        'religion',
        'science',
        'adventure',
        'romance',
      ],
      categoriaEscolhida: 'Todos',
      pagina: 1,
    }
  },
  methods: {
    async listarLivros() {
      const api = axios.create({ baseURL: 'https://gutendex.com/books/' })

      try {
        const resposta = await api.get('', {
          params: {
            search: this.busca,
            page: this.pagina,
            topic: this.categoriaEscolhida == 'Todos' ? '' : this.categoriaEscolhida,
          },
        })
        this.livros = resposta.data.results
        this.total = resposta.data.count
        window.scrollTo(0, 0)
        console.log(this.livros)
      } catch (erro) {
        console.error(erro)
      }
    },
    selecionarCategoria(categoria) {
      this.categoriaEscolhida = categoria
    },
    buscarLivros() {
      if (this.pagina === 1) {
        this.listarLivros()
      } else {
        this.pagina = 1
      }
    },
  },
  mounted() {
    this.listarLivros()
  },
  watch: {
    pagina() {
      this.listarLivros()
    },
    categoriaEscolhida() {
      if (this.pagina === 1) {
        this.listarLivros()
      } else {
        this.pagina = 1
      }
    },
  },
}
</script>

<template>
  <Header></Header>

  <nav class="nav-bar d-flex align-items-center justify-content-between">
    <b-dropdown variant="link" class="categorias-dropdown" no-caret>
      <template #button-content>
        <span class="dropdown-label">☰ {{ categoriaEscolhida.toUpperCase() }}</span>
      </template>
      <b-dropdown-item
        v-for="categoria in categorias"
        @click="selecionarCategoria(categoria)"
        :key="categoria"
      >
        {{ categoria }}
      </b-dropdown-item>
    </b-dropdown>

    <div class="busca-wrapper d-flex align-items-center">
      <b-form-input v-model="busca" placeholder="Buscar livro" class="busca" />
      <b-button class="busca-btn" @click="buscarLivros" variant="link"> Buscar </b-button>
    </div>
  </nav>

  <div class="livros-header px-3 py-4">
    <h2 class="livros-titulo">Livros</h2>
    <p class="livros-subtitulo">Explore nossa biblioteca aberta.</p>
    <hr class="livros-divisor" />
  </div>

  <div class="container mt-4">
    <div v-if="livros">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <b-col
          v-for="livro in livros"
          :key="livro.id"
          class="d-flex align-items-stretch justify-content-center mb-4"
        >
          <LivroCard :livro="livro" />
        </b-col>
      </b-row>
    </div>

    <div v-else class="text-center py-5">
      <p class="livro-info">Carregando livros...</p>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-4 mb-5">
    <b-pagination v-model="pagina" :total-rows="total" :per-page="32" class="paginacao" />
  </div>

  <Footer></Footer>
</template>

<style scoped>
body,
html {
  background-color: #eae5d9;
  min-height: 100vh;
}
.nav-bar {
  background-color: #656d4a;
  width: 100vw;
  height: 80px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding-left: 70px;
  padding-right: 70px;
}

.dropdown-label {
  color: white;
  font-size: 1.1rem;
  letter-spacing: 2px;
  font-weight: 600;
}

.busca-wrapper {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}

.busca {
  width: 450px;
  background: transparent;
  border: none;
  border-radius: 0;
  color: white;
}

.busca::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
.livros-titulo {
  font-family: Georgia, serif;
  color: #7f5539;
  font-size: 2.3rem;
  margin-bottom: 4px;
}

.livros-subtitulo {
  color: #6c757d;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.livros-divisor {
  border-color: #c9b99a;
  opacity: 1;
}
.busca-btn {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  padding: 0 12px;
  text-decoration: none;
}
.paginacao :deep(.page-link) {
  background-color: transparent;
  border: 1px solid #c9b99a;
  color: #7f5539;
}

.paginacao :deep(.page-item.active .page-link) {
  background-color: #7f5539;
  border-color: #7f5539;
  color: white;
}

.paginacao :deep(.page-link:hover) {
  background-color: #c9b99a;
  color: white;
}
</style>
