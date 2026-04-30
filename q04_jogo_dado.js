// Q4 - Jogo do dado

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sorteado = Math.floor(Math.random() * 6) + 1;
let tentativas = 0;

console.log("=== Jogo do Dado ===");
console.log("Tente adivinhar o número sorteado (entre 1 e 6).");

function perguntar() {
  rl.question("Digite seu palpite: ", (input) => {
    const palpite = parseInt(input);

    if (isNaN(palpite) || palpite < 1 || palpite > 6) {
      console.log("Número inválido. Digite um número entre 1 e 6.");
      perguntar();
      return;
    }

    tentativas++;

    if (palpite === sorteado) {
      console.log(`\nParabéns! Você acertou em ${tentativas} tentativa(s)!`);
      rl.close();
    } else {
      console.log("Errou! Tente novamente.");
      perguntar();
    }
  });
}

perguntar();
