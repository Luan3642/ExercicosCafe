function fatorial(numero) {

    if (numero < 2) return 1;

    return numero * fatorial(numero - 1);
}

function exibe(numero) {
    let array = [];
    for (let i = 0; i <=numero; i++) {
        array.push(fatorial(i));
    }

    return array;
}

console.log(exibe(5));