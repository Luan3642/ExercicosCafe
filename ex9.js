// 1) Ter uma função que receba log e base 
// 2) Verificar uma propriedade que te ajude a calcular o logaritmo 
// 3) Gravar a quantidade de vezes que foi necessária para decompor um número, até que o valor da base e do logaritmando sejam iguais 
// 4) log16 na base 4, log100 na base 10, log68 na base 8, log25 na base 5
// 5) toda as propriedades que eu pude aplicar, eu aplico.


//Variável de escopo global
let logDe = 25;
let base = 5;


console.log(`Log ${logDe}, na base ${base}, temos o valor do logaritmo em ${logaritmo(logDe,base)}`);


//Variável de escopo local
function decomposicao(){

    let count = 1;

    for(; logDe !== base; count++)
        logDe /= base;

    return count;
}

function logaritmo(){
    if(base < 1) return new Error('A base não pode ser menor que 1');
    if(base === 1) return new Error('A base não pode ser igual a 1');
    if(logDe < 1) return new Error('Log precisa ser maior que 1');
    if(logDe === base ) return (1);
    return decomposicao(logDe, base);
}