<script lang="ts">
import axios from 'axios';
import LivroCard from '@/components//LivroCard.vue'
export default{
    name: 'ListaLivrosView',
    components: {
        LivroCard
    },
    data() {
        return {
            next: "",
            total: null,
            livros: null,

        }
    },
    methods:{
        async listarLivros() {
            const api = axios.create({
                baseURL:`https://gutendex.com/books/`
            })

            try {
                let resposta = await api.get("")
                console.log(resposta)
                this.livros = resposta.data.results
                this.total = resposta.data.count
            } catch (erro) {
                console.log(erro)
            }
        }
    },
    mounted(){
        this.listarLivros()
        console.log("Teste")
    }
}
</script>
<template>
    <div class="d-flex container align-items-center flex-column">
        <b-row>
            <b-col class="mb-3" v-for="livro in livros" :key="livro.name">
                <LivroCard :livro="livro"/>
            </b-col>
        </b-row>
    </div>
</template>