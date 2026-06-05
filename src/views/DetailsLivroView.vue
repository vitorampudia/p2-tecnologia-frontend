<script lang="ts">
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DetailsLivroView',
  components: { Header, Footer },
  data() {
    return {
      livro: null,
      titulo: '',
      autor: 'Desconhecido',
      capa: '',
      resumo: 'Sem descrição disponível.',
      idioma: '',
      assuntos: [],
      downloads: 0,
      linkLeitura: '',
    }
  },
  methods: {
    async carregarLivro() {
      const api = axios.create({ baseURL: 'https://gutendex.com/books/' })

      try {
   
        const id = String(this.$route.params.id)
        const resposta = await api.get(id)
        const livro = resposta.data

        this.livro = livro
        this.titulo = livro.title
        this.capa = livro.formats['image/jpeg']
        this.idioma = livro.languages[0]
        this.assuntos = livro.subjects
        this.downloads = livro.download_count

        if (livro.authors.length > 0) {
          this.autor = livro.authors[0].name
        } else {
          this.autor = 'Desconhecido'
        }

 
        if (livro.summaries.length > 0) {
          this.resumo = livro.summaries[0]
        } else {
          this.resumo = 'Sem descrição disponível.'
        }

     
        if (livro.formats['text/html']) {
          this.linkLeitura = livro.formats['text/html']
        } else {
          this.linkLeitura = livro.formats['text/plain; charset=utf-8']
        }

        window.scrollTo(0, 0)
        console.log(this.livro)
      } catch (erro) {
        console.error(erro)
      }
    },
    voltar() {
      this.$router.push({ name: 'ListaLivros' })
    },
  },
  mounted() {
    this.carregarLivro()
  },
}
</script>

<template>
  <Header></Header>

  <div class="detalhe-header px-3 py-4">
    <h2 class="detalhe-titulo">Detalhes do Livro</h2>
    <p class="detalhe-subtitulo">Conheça mais sobre esta obra.</p>
    <hr class="detalhe-divisor" />
  </div>

  <div class="container mt-4 mb-5">
    <div v-if="livro">
      <b-row>
      
        <b-col cols="12" md="4" class="d-flex justify-content-center mb-4">
          <img :src="capa" class="img-detalhe shadow-sm" alt="Capa do livro" />
        </b-col>

       
        <b-col cols="12" md="8">
          <h1 class="livro-titulo">{{ titulo }}</h1>
          <p class="livro-autor">{{ autor }}</p>

          <hr class="detalhe-divisor" />

          <h5 class="secao-titulo">Sinopse</h5>
          <p class="livro-resumo">{{ resumo }}</p>

          <p class="livro-info"><strong>Idioma:</strong> {{ idioma }}</p>
          <p class="livro-info"><strong>Downloads:</strong> {{ downloads }}</p>

          <div class="mb-4">
            <span v-for="assunto in assuntos" :key="assunto" class="assunto-badge">
              {{ assunto }}
            </span>
          </div>

          
          <a :href="linkLeitura" target="_blank" class="btn btn-ler me-2">Ler livro</a>
          <b-button class="btn-voltar" @click="voltar">Voltar</b-button>
        </b-col>
      </b-row>
    </div>

    <div v-else class="text-center py-5">
      <p class="livro-info">Carregando livro...</p>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
.detalhe-titulo {
  font-family: Georgia, serif;
  color: #7f5539;
  font-size: 2.3rem;
  margin-bottom: 4px;
}

.detalhe-subtitulo {
  color: #6c757d;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.detalhe-divisor {
  border-color: #c9b99a;
  opacity: 1;
}

.img-detalhe {
  width: 300px;
  height: 450px;
  object-fit: cover;
}

.livro-titulo {
  font-family: Georgia, serif;
  color: #8b5a2b;
  font-size: 2rem;
  margin-bottom: 4px;
}

.livro-autor {
  color: #6c757d;
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.secao-titulo {
  color: #656d4a;
  font-weight: 600;
  margin-bottom: 8px;
}

.livro-resumo {
  color: #4a4a4a;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
}

.livro-info {
  color: #6c757d;
  margin-bottom: 6px;
}

.assunto-badge {
  display: inline-block;
  background-color: #c9b99a;
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 12px;
  margin: 4px 4px 0 0;
}

.btn-ler {
  background-color: #7f5539;
  color: #fff;
  font-weight: 600;
  padding: 8px 24px;
  border: none;
}

.btn-ler:hover {
  background-color: #8b5a2b;
  color: #fff;
}

.btn-voltar {
  background-color: transparent;
  color: #7f5539;
  border: 1px solid #7f5539;
  font-weight: 600;
  padding: 8px 24px;
}

.btn-voltar:hover {
  background-color: #7f5539;
  color: #fff;
}
</style>
