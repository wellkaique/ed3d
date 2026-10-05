function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('ativa'));

  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  const secaoAlvo = document.getElementById(`sec-${secaoId}`);
  if (secaoAlvo) {
    secaoAlvo.classList.add('ativa');
  }

  // Atualiza estado visual dos botões do menu
  const indexMap = { 'home': 0, 'contabilidade': 1, 'impressao3d': 2 };
  if (navBtns[indexMap[secaoId]]) {
    navBtns[indexMap[secaoId]].classList.add('active');
  }

  // Rola suavemente para o topo ao trocar de aba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}