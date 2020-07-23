function verifica(largura) {
    if (largura % 2 == 0) {
        const soma = +1;
        return soma;
    } else if (largura < 0) {
        return new Error('Você passou um valor negativo');
    } else {
        const subtrai = 0;
        return subtrai;
    }
}

function desenha(largura) {
    for (let i = 0; i < largura; i++) {
        for (let j = 0; j < largura; j++) {
            const matriz = [
                [verifica(largura), verifica(largura)]
            ];
        }
    }
    return matriz;
}

console.log(desenha(12))