# ONG Mãos que Ajudam

Plataforma web para a ONG Mãos que Ajudam (Santos/SP), com apresentação institucional, projetos sociais e cadastro de voluntários e doadores. Projeto acadêmico da disciplina de Desenvolvimento Front-end.

## Funcionalidades

- Single Page Application (SPA) com navegação por hash, sem recarregar a página
- Templates dinâmicos gerados com JavaScript
- Formulário com validação em tempo real, máscaras (CPF, telefone e CEP) e verificação de CPF
- Cadastros salvos no `localStorage`
- Layout responsivo (Grid de 12 colunas e 5 breakpoints) com menu hambúrguer
- Acessibilidade conforme WCAG 2.1 nível AA

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, media queries)
- JavaScript ES6+ com módulos (`import`/`export`), sem bibliotecas externas
- Git e GitHub (GitFlow), GitHub Pages para deploy

## Estrutura de pastas

```
ong-spa/
├── html/index.html        # página única da SPA
├── css/reset.css, style.css
├── imagens/               # logo e fotos
└── js/
    ├── main.js            # ponto de entrada
    └── modules/           # router, templates, validacao, mascaras, storage
```

## Pré-requisitos

- Navegador atualizado (Chrome, Firefox, Edge ou Safari)
- Git
- VS Code com a extensão Live Server (ou qualquer servidor local)

## Instalação e execução

```bash
git clone https://github.com/SEU-USUARIO/ong-spa.git
cd ong-spa
```

Abra a pasta no VS Code, clique com o botão direito em `html/index.html` e escolha **Open with Live Server**.

> Os módulos JavaScript não funcionam abrindo o arquivo direto (`file://`); é necessário um servidor local.

## Versionamento

- Fluxo **GitFlow**: `main` (produção), `develop` (integração), `feature/*` (novas funcionalidades) e `hotfix/*` (correções urgentes)
- Mensagens no padrão **Conventional Commits** (`feat:`, `fix:`, `docs:`, `refactor:`)
- **Versionamento semântico** (MAJOR.MINOR.PATCH) com tags: `v1.0.0`, `v1.1.0`, `v2.0.0`

## Autor

Bruno Perina, Análise e Desenvolvimento de Sistemas (Cruzeiro do Sul)
