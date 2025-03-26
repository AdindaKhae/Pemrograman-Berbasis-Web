function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}
console.log("Deret Fibonacci (10 angka):", fibonacci(10));

const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+': return numbers.reduce((a, b) => a + b, 0);
        case '-': return numbers.reduce((a, b) => a - b);
        case '*': return numbers.reduce((a, b) => a * b, 1);
        case '/': return numbers.reduce((a, b) => a / b);
        case '%': return numbers.reduce((a, b) => a % b);
        default: return "Operator tidak valid!";
    }
};
console.log("Penjumlahan:", calculator('+', 10, 20, 30));  
console.log("Pengurangan:", calculator('-', 50, 10, 5));   
console.log("Perkalian:", calculator('*', 2, 3, 4));     
console.log("Pembagian:", calculator('/', 100, 2, 5));   
console.log("Modulus:", calculator('%', 100, 30));   
