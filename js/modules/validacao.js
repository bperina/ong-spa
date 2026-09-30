// Validação do formulário de cadastro com feedback ao usuário
import { aplicarMascaras } from './mascaras.js';
import { salvarCadastro, listarCadastros, cpfJaCadastrado } from './storage.js';

// Verifica os dígitos verificadores do CPF
function cpfValido(cpf) {
  const n = cpf.replace(/\D/g, '');
  if (n.length !== 11 || /^(\d)\1+$/.test(n)) return false;
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) soma += n[i] * (t + 1 - i);
    if (((soma * 10) % 11) % 10 !== Number(n[t])) return false;
  }
  return true;
}

function mensagemErro(campo) {
  const v = campo.validity;
  if (v.valueMissing) return 'Campo obrigatório.';
  if (v.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;
  if (v.typeMismatch) return 'Formato de e-mail inválido.';
  if (v.patternMismatch) return `Use o formato ${campo.placeholder}.`;
  if (v.rangeOverflow || v.rangeUnderflow) return 'Data fora do intervalo permitido.';
  if (v.customError) return campo.validationMessage;
  return '';
}

function validarCampo(campo) {
  if (campo.id === 'cpf') {
    let msg = '';
    if (campo.value && !campo.validity.patternMismatch) {
      if (!cpfValido(campo.value)) msg = 'CPF inválido.';
      else if (cpfJaCadastrado(campo.value)) msg = 'Este CPF já está cadastrado.';
    }
    campo.setCustomValidity(msg);
  }
  const erro = mensagemErro(campo);
  document.getElementById(`erro-${campo.id}`).textContent = erro;
  campo.classList.toggle('invalido', erro !== '');
  campo.setAttribute('aria-invalid', erro !== '');
  return erro === '';
}

function atualizarTotal() {
  document.getElementById('total-cadastros').textContent =
    `Cadastros realizados neste navegador: ${listarCadastros().length}`;
}

export function iniciarFormulario() {
  const form = document.getElementById('form-cadastro');
  const campos = form.querySelectorAll('input, select');
  const alertaErro = document.getElementById('alerta-erro');
  const toast = document.getElementById('toast');

  aplicarMascaras();
  atualizarTotal();

  campos.forEach((c) => c.addEventListener('blur', () => validarCampo(c)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultados = [...campos].map(validarCampo);
    if (resultados.includes(false)) {
      alertaErro.hidden = false;
      form.querySelector('.invalido').focus();
      return;
    }
    alertaErro.hidden = true;
    salvarCadastro(Object.fromEntries(new FormData(form)));
    form.reset();
    atualizarTotal();
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 4000);
  });
}
