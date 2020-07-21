function fibonacci(numero) {
    if (numero < 2) return 1;

    return numero + fibonacci(numero -1);
}

function exibe(numero){
    let array = []
    for(let i = 1; i <= numero; i++){
        array.push(fibonacci(i));
    }

    return array;
}

console.log(exibe(5));


// f(x) |-> x + f(x - 1)