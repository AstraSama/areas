const prompt = require("prompt-sync")();
const { AREA_CIRCULO, AREA_TRIANGULO, AREA_RETANGULO } = require("../Model/index.js");

let saida = 0;

console.log("\n1-) Circulo;\n2-) Triângulo;\n3-) Retângulo\n4-) sair: ");




do {
    let resposta = +prompt("Escolha qual forma quer: ");

    switch (resposta) {
        case 1:
            let area = +prompt("Coloque a área: ");
    
            console.log("A área desse círculo é: ", Math.floor(AREA_CIRCULO(area)));
        
        break;
    
        case 2:
            let base = +prompt("Qual a base desse triângulo: ");
            let altura = +prompt("Qual a altura desse triângulo: ");
    
            console.log("A área desse triângulo é ", Math.floor(AREA_TRIANGULO(base, altura)));
    
        break;
    
        case 3:
            let base2 = +prompt("Qual a base desse retângulo: ");
            let altura2 = +prompt("Qual a altura desse retângulo: ");
    
            console.log("A área desse retângulo é ", AREA_RETANGULO(base2, altura2));
    
        break;

        case 4:
            saida = 1;

        break;
    
        default:
            console.log("Escreva certo: ");
    }
} while (!saida);