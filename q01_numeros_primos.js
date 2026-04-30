// Q1 - 100 primeiros números primos

function ehPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeiros100Primos() {
  const primos = [];
  let n = 2;
  while (primos.length < 100) {
    if (ehPrimo(n)) primos.push(n);
    n++;
  }
  return primos;
}

console.log("Os 100 primeiros números primos:");
console.log(primeiros100Primos().join(", "));
