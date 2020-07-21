// equação -> 1x^2 - 10x + 24 = 0

const segundoGrau = (a, b, c) => {
    const delta = b**2 - 4 * a * c;
    
    const resultPositivo = (-b + Math.sqrt(delta)) / 2 * a;

    const resultNegativo = (-b - Math.sqrt(delta)) / 2 * a;

    return `O resultado positivo é: ${resultPositivo}, o resultado negativo é: ${resultNegativo}`;
}

const outraFuncao = () =>{
    return segundoGrau(1,6, 9);
}

console.log(outraFuncao());