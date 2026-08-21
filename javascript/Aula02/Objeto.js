let pessoa = {}
// console.log(pessoa);
pessoa.nome = 'Edson';
// console.log(pessoa);
pessoa.idade = 30;
// console.log(pessoa);

let aluno = {
    nome: 'Edson',
    idade: 30,
    endereco: {
        rua: 'Rua A',
        numero: 123,
        bairro: 'Centro'
    },
    notas: [8, 9, 10, 7]
}
// console.log(aluno);
// console.log(aluno);
// console.log(aluno.endereco);
// console.log(aluno.notas);
// console.log(aluno.idade);
// console.log(aluno.endereco.bairro);
aluno.endereco.bairro = 'bairro das flores';
// console.log(aluno)
// console.log(aluno.notas[2]);
pessoa.aluno = aluno;
console.log(pessoa);
console.log(JSON.stringify(pessoa));