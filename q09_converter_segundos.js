// Q9 - Converter segundos em dias, horas, minutos e segundos

function converterSegundos(totalSegundos) {
  const dias = Math.floor(totalSegundos / 86400);
  totalSegundos %= 86400;

  const horas = Math.floor(totalSegundos / 3600);
  totalSegundos %= 3600;

  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  return { dias, horas, minutos, segundos };
}

// Simulação de entrada do usuário
const totalSegundos = 7322;
const resultado = converterSegundos(totalSegundos);

console.log(`${totalSegundos} segundos equivalem a:`);
console.log(`${resultado.dias} dia(s), ${resultado.horas} hora(s), ${resultado.minutos} minuto(s) e ${resultado.segundos} segundo(s)`);
