
var readlineSync = require('readline-sync');
var alunoNotaA = readlineSync.question('Nota do Aluno A: ');
var alunoNotaB = readlineSync.question('Nota do Aluno B: ');

var resultado = alunoNotaA - alunoNotaB

if (resultado <= 1.5) {
    console.log('Alunos Válidos a média foi de ', resultado)
} else {
    console.log('Alunos Inválidos a média foi de ', resultado)
}
