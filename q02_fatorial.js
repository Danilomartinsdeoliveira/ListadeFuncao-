function fatorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número para calcular o fatorial: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n)) {
    console.log("Entrada inválida. Por favor, informe um número inteiro.");
  } else {
    const resultado = fatorial(n);
    if (resultado === undefined) {
      console.log("Erro: fatorial não definido para números negativos.");
    } else {
      console.log(`${n}! = ${resultado}`);
    }
  }

  rl.close();
});