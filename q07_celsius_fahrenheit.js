// Q7 - Conversão de Celsius para Fahrenheit

function celsiusParaFahrenheit(tc) {
  return (tc * 9 / 5) + 32;
}

// Simulação de entrada do usuário
const celsius = 100;
const fahrenheit = celsiusParaFahrenheit(celsius);

console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
