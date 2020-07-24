function criaMatriz(linha, coluna) {
    const matriz = Array(linha).fill(undefined);
    matriz[1] = Array(coluna).fill(undefined);

    for (i in matriz) {
        for (j in matriz) {
            matriz[i] = Array(linha).fill(1);
            matriz[j] = Array(coluna).fill(1);
        }
    }
    return matriz;

}

const matriz = criaMatriz(3, 6);

for(elemento of matriz){
    console.log(elemento);
}