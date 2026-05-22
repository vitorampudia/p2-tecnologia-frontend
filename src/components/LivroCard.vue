<script lang="ts">
export default {
    name: 'LivroCard',
    props: {
        livro: Object
    },
    computed: {
        
    },
    methods:{
        detalhesLivro(){

        }
    }
}
</script>
<template>
    <b-card
    :title=""
    class="text-center mb-3"
    >
        <b-img
            :src="321"

        />
        <b-button variant="primary" class="mt-1" @click="detalhesLivro()">
            Ver Detalhes
        </b-button>

    </b-card>
</template>