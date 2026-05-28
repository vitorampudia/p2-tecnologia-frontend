<script lang="ts">
export default {
    name: 'LivroCard',
    props: {
        livro: Object
    },
    data(){
        return {
            titulo: this.livro?.title,
            autor: this.livro?.authors,
            capa: this.livro?.formats["image/jpeg"],
            lang: this.livro?.languages[0]
        }
    },
    computed: {
        
    },
    methods:{
        detalhesLivro(){

        },
    }
}
</script>
<template>
    <b-card-group deck>
        <b-card :title="titulo" :img-src="capa" img-alt="Livro" width="50px" img-top>
            <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </b-card-text>
            <template #footer>
                <small class="text-muted">Language: {{ lang }}</small>
            </template>
        </b-card>
    </b-card-group>
</template>