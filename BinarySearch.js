const vetor = [1,2,3,4,5];


const binSearch = (vetor, left, right, valor) =>{
    if(right >= left){
        let itemMeio = parseInt(left + (right - left) /2);
        if (vetor[itemMeio] === valor){
            return valor;
        }
        if(vetor[itemMeio] > valor){
            binSearch(vetor, left, itemMeio -1, valor );
        }
        return binSearch(vetor, itemMeio +1, right);
    }
    return -1;
}

console.log(binSearch(vetor, 0, vetor.length - 1, 20))