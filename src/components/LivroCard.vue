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
    :img-src="capa"
    img-top
    img-class="img-livro"
    class="card-livro shadow-sm d-flex flex-column"
  >
    <h1>teste</h1>
    
  </b-card>
</template>

<style>
    .card-livro{
        width: 100%;
        max-width: 220px;
        margin: auto;
    }
    .card-img-top{
        height: 250px;
        object-fit: cover;
    }
</style>
