// Persistência dos cadastros no localStorage
const CHAVE = 'ong-cadastros';

export function listarCadastros() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
  } catch {
    return [];
  }
}

export function salvarCadastro(dados) {
  const cadastros = listarCadastros();
  cadastros.push({ ...dados, data: new Date().toISOString() });
  localStorage.setItem(CHAVE, JSON.stringify(cadastros));
}

export function cpfJaCadastrado(cpf) {
  return listarCadastros().some((c) => c.cpf === cpf);
}
