function pertenceFibonacci(num) {
  let a = 0, b = 1, c;
  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }
  return c === num;
}

// Exemplo de uso:
let numero = 21;
if (pertenceFibonacci(numero)) {
  console.log(numero, "pertence à sequência de Fibonacci.");
} else {
  console.log(numero, "não pertence à sequência de Fibonacci.");
}