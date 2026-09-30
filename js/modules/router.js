// Roteamento da SPA baseado em hash (#/rota)
import { paginaInicio, paginaProjetos, paginaCadastro } from './templates.js';
import { iniciarFormulario } from './validacao.js';

const rotas = {
  '#/inicio': { titulo: 'Início', template: paginaInicio },
  '#/projetos': { titulo: 'Projetos', template: paginaProjetos },
  '#/cadastro': { titulo: 'Cadastro', template: paginaCadastro, aoCarregar: iniciarFormulario },
};

function renderizar() {
  const hash = rotas[location.hash] ? location.hash : '#/inicio';
  const rota = rotas[hash];
  const app = document.getElementById('app');

  app.innerHTML = rota.template();          // limpa o contêiner e injeta o novo HTML
  document.title = `${rota.titulo} | ONG Mãos que Ajudam`;
  if (rota.aoCarregar) rota.aoCarregar();   // ativa scripts da página (ex.: formulário)

  document.querySelectorAll('[data-link]').forEach((link) => {
    if (link.getAttribute('href') === hash) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  document.getElementById('menu-toggle').checked = false; // fecha o menu mobile
  window.scrollTo(0, 0);
  app.focus();                              // leva o foco ao novo conteúdo (acessibilidade)
}

export function iniciarRouter() {
  window.addEventListener('hashchange', renderizar);
  renderizar();
}
