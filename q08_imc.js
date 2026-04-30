// Q8 - Cálculo do IMC (Índice de Massa Corporal)

function calcularIMC(massa, altura) {
  return massa / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25.0) return "Peso normal";
  if (imc < 30.0) return "Sobrepeso";
  return "Obesidade";
}

// Simulação de entrada do usuário
const massa = 70;   // kg
const altura = 1.75; // metros

const imc = calcularIMC(massa, altura);
const classificacao = classificarIMC(imc);

console.log(`Massa: ${massa} kg`);
console.log(`Altura: ${altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
