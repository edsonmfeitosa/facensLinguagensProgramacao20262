//Funções nomeadas
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3, 4));
console.log(soma(2));

//Funções anônimas
let subtracao = function (a, b) {
    return a - b;
}
console.log(subtracao(5, 3));

//Arrow functions
let divisao = (a, b) => {
    if (b === 0) {
        return 'Não é possível dividir por zero';
    }
    return a / b;
}
//diferença entre dois iguais e três iguais
let x = 5;
let y = '5';
console.log(x == y); // true
console.log(x === y); // false

//arrow function com apenas uma linha de código
let multiplicacao = (a, b) => a * b;
console.log(multiplicacao(2, 3));

//função de exemplo
let conta = (a, b, operacao) => operacao(a, b);
console.log(conta(2, 3, soma));
console.log(conta(2, 3, subtracao));
console.log(conta(2, 3, divisao));
console.log(conta(2, 3, multiplicacao));