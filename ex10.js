function verifica(linhas, colunas ){
    if(linhas < 1) return new Error('A linhas devem ser maior ou igual a 1');
    if(colunas < 1) return new Error('A coluna deve ser maior o igual a 1');
}

function montaMatriz(linhas, colunas){

    verifica(linhas, colunas);
    const matriz = [[linhas, colunas]];

    for(let i = 1; i <= linhas.length ; i++ ){
        for(let j = 1; j <= colunas.length; j++){
            matriz[[linhas[i], colunas[j]]];
        }
    }
    return matriz;

}

console.log(montaMatriz(1,2));