
function aperta() {
    let input = document.getElementById('texto');
    let guardaValor = input.value;
    
}

function exibeVetor() {

    let vetor = [guardaValor];
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);
    }
    console.log('\n');

    for (let i = vetor.length - 1; i >= 0; i--) {
        console.log(vetor[i]);
    }
}
