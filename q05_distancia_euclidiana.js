// Q5 - Distância euclidiana entre dois pontos

function distancia(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Exemplo de uso
const x1 = 0, y1 = 0;
const x2 = 3, y2 = 4;

const d = distancia(x1, y1, x2, y2);
console.log(`Ponto A = (${x1}, ${y1})`);
console.log(`Ponto B = (${x2}, ${y2})`);
console.log(`Distância euclidiana = ${d.toFixed(4)}`);
