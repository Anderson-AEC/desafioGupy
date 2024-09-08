function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  // Exemplo de uso:
  const str = "Olá, mundo!";
  const invertida = inverterString(str);
  console.log(invertida); // !odnum ,álO