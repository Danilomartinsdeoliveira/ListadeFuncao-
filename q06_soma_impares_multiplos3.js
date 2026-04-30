// Q6 - Soma de todos os números ímpares múltiplos de 3 no intervalo [1, 1000]

function somaImparesMultiplos3() {
  let soma = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 !== 0 && i % 3 === 0) {
      soma += i;
    }
  }
  return soma;
}

const resultado = somaImparesMultiplos3();
console.log(`Soma dos ímpares múltiplos de 3 no intervalo [1, 1000] = ${resultado}`);
