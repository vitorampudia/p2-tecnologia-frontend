<script lang="ts">
export default {
  name: 'LivroCard',
  props: {
    livro: Object,
  },
  data() {
    return {
      titulo: this.livro?.title,
      autor: this.livro?.authors[0]?.name ?? 'Desconhecido',
      capa: this.livro?.formats['image/jpeg'],
      lang: this.livro?.languages[0],
      subject: this.livro?.subjects,
    }
  },
  methods: {
    detalhesLivro() {},
  },
}
</script>

<template>
  <b-card
    no-body
    class="card-livro shadow-sm d-flex flex-column border-0 p-0"
  >
    <img :src="capa" class="img-livro" alt="Capa do livro" />

    <div class="conteudo-card d-flex flex-column text-left px-3 pt-3">
      <h4 class="card-title font-weight-bold mb-1 titulo-ellipsis" style="color: #8B5A2B;">
        {{ titulo }}
      </h4>

      <p class="card-text text-muted font-italic mb-3 small text-truncate">
        {{ autor }}
      </p>
    </div>

    <div class="px-3 pb-4 mt-auto">
      <b-button 
        @click="detalhesLivro" 
        class="w-100 border-0 font-weight-bold py-2" 
        style="background-color: #7f5539; color: #FFF;"
      >
        Ver Detalhes
      </b-button>
    </div>
  </b-card>
</template>

<style scoped>
    .card-livro {
        height: 650px;
        width: 250px;
        margin: auto;
        overflow: hidden; 
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    
    .img-livro {
        height: 450px;
        width: 250px;
        object-fit: cover;
        display: block;
        flex-shrink: 0; 
    }
    
    .conteudo-card {
        flex-grow: 1; 
    }
    
    .titulo-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-overflow: ellipsis;
        height: 3em; 
        line-height: 1.5em;
    }       
</style>