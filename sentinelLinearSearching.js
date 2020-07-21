const vetor = [1,6,8,9,10];


const buscaSentinela = (vetor, chave) => {
    let indice = 0;
    vetor.push(chave); 
    

    while(vetor[indice] !== chave){
        indice += 1;

        vetor.pop();
    }

    if(indice == vetor.length - 1){
        return - 1;
    }

   
    return indice;

}

console.log(buscaSentinela(vetor, 8));