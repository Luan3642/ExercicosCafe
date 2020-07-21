function fibo(n){
    if(n === 1) return 1;
    if (n === 2) return 2;

    return (fibo(n - 1) + fibo(n - 2));
}

// 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

console.log(3);