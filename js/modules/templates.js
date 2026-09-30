// Templates dinâmicos: funções que retornam fragmentos de HTML

const projetos = [
  {
    titulo: 'Horta Comunitária',
    categoria: 'Alimentação', cor: 'verde',
    imagem: 'horta.jpg',
    alt: 'Moradores cultivando hortaliças nos canteiros da horta comunitária',
    legenda: 'Canteiros cultivados pela comunidade.',
    descricao: 'Produz alimentos saudáveis para 80 famílias e ensina técnicas de cultivo sustentável.',
  },
  {
    titulo: 'Reforço Escolar',
    categoria: 'Educação', cor: 'laranja',
    imagem: 'reforco.jpg',
    alt: 'Voluntária ajudando crianças com a lição de casa em uma sala de aula',
    legenda: 'Aulas de apoio no contraturno escolar.',
    descricao: 'Atende 120 crianças com aulas de português e matemática.',
  },
];

// Componente reutilizável: card de projeto
export function cardProjeto(p) {
  return `
    <article>
      <h3>${p.titulo}</h3>
      <p><span class="badge badge-${p.cor}">${p.categoria}</span>
         <span class="badge badge-azul">Em andamento</span></p>
      <figure>
        <img src="../imagens/${p.imagem}" alt="${p.alt}" width="800" height="450" loading="lazy">
        <figcaption>${p.legenda}</figcaption>
      </figure>
      <p>${p.descricao}</p>
    </article>`;
}

export function paginaInicio() {
  return `
    <section id="sobre">
      <h1>ONG Mãos que Ajudam</h1>
      <p>Desde 2015, promovemos educação, alimentação e cidadania para famílias em situação de vulnerabilidade social.</p>
      <figure>
        <img src="../imagens/voluntarios.jpg" alt="Voluntários da ONG distribuindo cestas básicas para famílias da comunidade" width="800" height="450">
        <figcaption>Ação de distribuição de alimentos em 2025.</figcaption>
      </figure>
    </section>
    <section id="missao">
      <h2>Nossa Missão</h2>
      <p>Transformar vidas por meio da solidariedade, oferecendo oportunidades e dignidade a quem mais precisa.</p>
    </section>
    <section id="impacto">
      <h2>Nosso Impacto</h2>
      <ul>
        <li><strong>1.200</strong> famílias atendidas</li>
        <li><strong>350</strong> voluntários ativos</li>
        <li><strong>15</strong> projetos em andamento</li>
      </ul>
    </section>
    <section id="contato">
      <h2>Fale Conosco</h2>
      <address>
        <p>Rua da Esperança, 123 – Centro, Santos/SP – CEP 11010-000</p>
        <p>Telefone: <a href="tel:+551332220000">(13) 3222-0000</a></p>
        <p>E-mail: <a href="mailto:contato@maosqueajudam.org.br">contato@maosqueajudam.org.br</a></p>
      </address>
    </section>`;
}

export function paginaProjetos() {
  return `
    <section id="intro">
      <h1>Nossos Projetos</h1>
      <p>Conheça as frentes de atuação da ONG e descubra como você pode fazer parte delas.</p>
    </section>
    <section id="projetos">
      <h2>Projetos em andamento</h2>
      ${projetos.map(cardProjeto).join('')}
    </section>
    <section id="voluntariado">
      <h2>Seja Voluntário</h2>
      <p>Doe algumas horas por semana em uma das áreas:</p>
      <ul>
        <li>Educação e reforço escolar</li>
        <li>Cultivo da horta comunitária</li>
        <li>Organização de eventos e campanhas</li>
      </ul>
      <p><a href="#/cadastro">Quero ser voluntário</a></p>
    </section>
    <section id="doacao">
      <h2>Faça uma Doação</h2>
      <p>Sua contribuição mantém nossos projetos funcionando:</p>
      <ul>
        <li>Pix: contato@maosqueajudam.org.br</li>
        <li>Transferência bancária</li>
        <li>Doação de alimentos, roupas e material escolar</li>
      </ul>
      <aside>
        <h3>Campanha ativa: Natal Solidário</h3>
        <p>Meta de 500 cestas básicas até dezembro.</p>
      </aside>
      <p><a href="#/cadastro">Quero ser doador</a></p>
    </section>`;
}

const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA',
  'PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

// Componente reutilizável: campo do formulário
function campo(id, rotulo, atributos = '') {
  return `
    <label for="${id}">${rotulo} *</label>
    <input id="${id}" name="${id}" ${atributos} required>
    <small class="erro-campo" id="erro-${id}" aria-live="polite"></small>`;
}

export function paginaCadastro() {
  return `
    <h1>Faça Parte</h1>
    <p>Preencha o formulário para se cadastrar como voluntário ou doador. Campos com * são obrigatórios.</p>
    <div class="alerta alerta-info" role="note">Seus dados serão usados apenas para contato sobre ações da ONG.</div>
    <div class="alerta alerta-erro" id="alerta-erro" role="alert" hidden>Existem campos inválidos. Verifique os campos destacados em vermelho.</div>
    <form id="form-cadastro" novalidate>
      <fieldset>
        <legend>Dados Pessoais</legend>
        ${campo('nome', 'Nome completo', 'type="text" minlength="5" autocomplete="name"')}
        ${campo('cpf', 'CPF', 'type="text" inputmode="numeric" maxlength="14" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00"')}
        ${campo('nascimento', 'Data de nascimento', 'type="date" min="1900-01-01" max="2010-12-31"')}
      </fieldset>
      <fieldset>
        <legend>Contato</legend>
        ${campo('email', 'E-mail', 'type="email" autocomplete="email"')}
        ${campo('telefone', 'Telefone', 'type="tel" maxlength="15" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(00) 00000-0000"')}
      </fieldset>
      <fieldset>
        <legend>Endereço</legend>
        ${campo('cep', 'CEP', 'type="text" inputmode="numeric" maxlength="9" pattern="\\d{5}-\\d{3}" placeholder="00000-000"')}
        ${campo('endereco', 'Endereço', 'type="text" autocomplete="address-line1"')}
        ${campo('cidade', 'Cidade', 'type="text"')}
        <label for="estado">Estado *</label>
        <select id="estado" name="estado" required>
          <option value="">Selecione</option>
          ${estados.map((uf) => `<option>${uf}</option>`).join('')}
        </select>
        <small class="erro-campo" id="erro-estado" aria-live="polite"></small>
      </fieldset>
      <button type="submit">Enviar cadastro</button>
    </form>
    <p id="total-cadastros"></p>
    <div class="toast" id="toast" role="status" hidden>Cadastro enviado com sucesso! Obrigado por fazer parte.</div>`;
}
