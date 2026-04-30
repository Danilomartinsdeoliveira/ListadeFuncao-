// Q10 - Verificar se um ano é bissexto

function ehBissexto(ano) {
  if (ano % 400 === 0) return true;
  if (ano % 100 === 0) return false;
  if (ano % 4 === 0)   return true;
  return false;
}

// Simulação de entrada do usuário
const ano = 2024;

if (ehBissexto(ano)) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}
