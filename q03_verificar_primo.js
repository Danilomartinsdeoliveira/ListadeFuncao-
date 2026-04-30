// Q3 - Verificar se um número é primo + listar os 100 primeiros

function ehPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Verificar um número específico
const numero = 17;
console.log(`${numero} é primo? ${ehPrimo(numero)}`);

// Listar os 100 primeiros primos
const primos = [];
let n = 2;
while (primos.length < 100) {
  if (ehPrimo(n)) primos.push(n);
  n++;
}

console.log("\nOs 100 primeiros números primos:");
console.log(primos.join(", "));
