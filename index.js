function solucao(notaAlunoA,notaAlunoB) {

    const resposta = notaAlunoA - notaAlunoB;

    let resposta1 = "DUPLA VALIDA";
    let resposta2 = "DUPLA INVÁLIDA";
    if (resposta < 1.5) {
        console.log(resposta1)
    } else {
        console.log(resposta2)
    };

    //seu codigo aqui

}
function naoMexer(input) {
    const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
    solucao(notaAlunoA,notaAlunoB);
}
//let input = require('fs').readFileSync('/dev/stdin','utf8');
//naoMexer(input);