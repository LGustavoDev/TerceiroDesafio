const readline = require('readline');

function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem saldo de ${saldo} e está no nível de ${nivel}`;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        const resultado = calcularNivel(parseInt(vitorias), parseInt(derrotas));
        console.log(resultado);
        rl.close();
    });
});
