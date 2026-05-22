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

        }
    }
}
</script>
<template>
    <LivroCard
    
    ></LivroCard>
</template>