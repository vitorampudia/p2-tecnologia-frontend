<script lang="ts">
export default {
  name: 'Footer',
}
</script>
<template>
  <footer class="footer d-flex align-items-center justify-content-between px-5">
    <div>
      <p class="footer-titulo mb-0">TRABALHO P2 TECNOLOGIAS DE FRONTEND</p>
      <p class="footer-copy mb-0">
        © 2026 Vitor Ampudia e Murilo Bernardo. Todos os direitos reservados.
      </p>
    </div>
    <div class="d-flex gap-4">
      <a href="https://github.com/vitorampudia" class="footer-link">vitorampudia</a>
      <a href="https://github.com/mdoz984" class="footer-link">mdoz984</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5f0e8;
  border-top: 1px solid #c9b99a;
  height: 80px;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.footer-titulo {
  font-family: Georgia, serif;
  color: #7f5539;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.footer-copy {
  color: #6c757d;
  font-size: 0.75rem;
}

.footer-link {
  color: #6c757d;
  font-size: 0.8rem;
  text-decoration: none;
}

.footer-link:hover {
  color: #7f5539;
}
</style>
