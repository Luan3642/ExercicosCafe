function decomposicao(numeroDecompoe, divisor){
    let count = 1;

    for(;numeroDecompoe !== divisor; count++){
        numeroDecompoe = numeroDecompoe / divisor;

        // 8 = 2
        // 4 = 3
        // 2 = 4
        // 

        
    }
    return `Log desse número ${count}`;
}
console.log(decomposicao(16,2));