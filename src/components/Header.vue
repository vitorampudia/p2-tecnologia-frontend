<script lang="ts">
export default {
  name: 'Header',
}
</script>

<template>
  <header class="container-header d-flex justify-content-center align-items-center py-3">
    <h1 class="m-0 text-center fw-semibold titulo">BIBLIOTECA</h1>
  </header>
</template>
<style scoped>
.titulo {
  letter-spacing: 6px;
  color: #fcd34d;
  font-family: Georgia, serif;
}
.container-header {
  background-color: #7f5539;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 90px;
}
</style>
