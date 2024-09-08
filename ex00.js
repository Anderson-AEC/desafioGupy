
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('faturamento.json'));

function analisarFaturamento(dados) {
  const valores = dados.map(dia => dia.valor).filter(valor => valor > 0);
  const soma = valores.reduce((acc, valor) => acc + valor, 0);
  const media = soma / valores.length;

  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const diasAcimaDaMedia = valores.filter(valor => valor > media).length;

  return { menorValor, maiorValor, diasAcimaDaMedia, media };
}

const resultado = analisarFaturamento(data);
console.log(resultado);