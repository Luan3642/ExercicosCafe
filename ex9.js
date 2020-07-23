// 1) Ter uma função que receba log e base 
// 2) Verificar uma propriedade que te ajude a calcular o logaritmo 
// 3) Gravar a quantidade de vezes que foi necessária para decompor um número, até que o valor da base e do logaritmando sejam iguais 
// 4) log16 na base 4, log100 na base 10, log68 na base 8, log25 na base 5
// 5) toda as propriedades que eu pude aplicar, eu aplico.

function logartimo(logDe, base){ 
    let log = logDe;
    let b = base;
    if (base < 1) return new Error('A base é não pode ser menor que 1')
    if (base === 1) return new Error('A base não pode ser igual a 1')
    if(logDe < 1) return new Error('O log não pode negativo')
     
    let count = 1;

    for(; logDe !== base; count++){
        logDe /= base;
    }
    return `log de: ${log}, na base ${b} é: ${count}`;
    
}

console.log(logartimo(27, 3));