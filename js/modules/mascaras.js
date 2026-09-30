// Máscaras de preenchimento para CPF, telefone e CEP
const formatos = {
  cpf: (v) => v.slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
  telefone: (v) => {
    v = v.slice(0, 11);
    if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    if (v.length > 6) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    if (v.length > 2) return v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    return v;
  },
  cep: (v) => v.slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2'),
};

export function aplicarMascaras() {
  Object.keys(formatos).forEach((id) => {
    const campo = document.getElementById(id);
    campo.addEventListener('input', () => {
      campo.value = formatos[id](campo.value.replace(/\D/g, ''));
    });
  });
}
