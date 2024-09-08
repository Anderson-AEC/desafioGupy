function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    // Verifica se o número é 0 ou 1, pois eles pertencem à sequência
    if (num === 0 || num === 1) {
        return true;
    }
    
    // Loop que gera a sequência de Fibonacci até encontrar o número ou superá-lo
    while (b < num) {
        temp = b; // Armazena o valor atual de 'b'
        b = a + b; // Calcula o próximo número da sequência
        a = temp; // Atualiza 'a' com o valor antigo de 'b'
    }
    
    // Retorna true se o número faz parte da sequência, caso contrário false
    return b === num;
}

let numero = 21; // Número a ser verificado
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci`);
}
