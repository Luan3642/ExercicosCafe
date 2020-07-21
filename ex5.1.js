function bubbleSortDesc(sequencia){
    let i;
    let j;
    for(i = sequencia.length - 1; i >= 0; i--){
        for(j = 0; j < i; j++ ){
            if(sequencia[i] > sequencia[j]){
                console.log(`O valor de sequência[i] ${sequencia[i]} `);
                console.log(`O valor de sequência[j] ${sequencia[j]} `);

                let auxiliar = sequencia[j];
                sequencia[j]= sequencia[i];
                sequencia[i] = auxiliar;
 
                console.log(`O valor do array completo é: ${sequencia}`);
            }
        }
    }
    return sequencia;    
}
// 5---4---3---2---1---0
// 5 + 4 + 3 + 2 + 1 + None
// ------------15------------

//PARTES DO FOR

// 1 - Inicializacao (declarar variavel e atribuir valor)
// 2 - Verificar Condicao (quantas condicoes quiser verificar)
// 2 -> VERDADEIRO  -> Executar bloco
        // ...      -> Incremento
// 2 -> FALSO       -> Cair fora

/*

* i             -> 5
* j             -> 0
* velho_array   -> [ 5, 6, 8, 9, 1, 10 ]
* novo_array    -> [ 10, 6, 8, 9, 1, 5 ]

// Condição não atendida
* i             -> 5 
* j             -> 1 
                         j            i  
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]
* novo_array    -> []

// Condição não atendida
* i             -> 5 
* j             -> 2
*                           J        i
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]
* novo_array    -> []


// Condição não atendida
* i             -> 5 
* j             -> 3
*                              J     i
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]
* novo_array    -> []


// Condição atendida
* i             -> 5 
* j             -> 4
*                                  j  i
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]
* auxiliar      -> 1
* sequencia[j]  -> 5
* sequencia[i]  -> 1
* novo_array    -> [10,6,8,9,5,1]

// 1 vez [condição não atendida]
* i             -> 4 
* j             -> 0
*                     j           i   
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]


//2 vez [condição não atendida]
* i             -> 4 
* j             -> 1
*                        J        i   
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]


//3 vez [condição não atendida]
* i             -> 4 
* j             -> 2
*                           j     i   
* velho_array   -> [ 10, 6, 8, 9, 1, 5 ]


*/

console.log(bubbleSortDesc([5,6,8,9,1,10]));