const AREA_CIRCULO = (data) => {
    data = Math.PI * (data ** 2);

    return data;
} 

const AREA_TRIANGULO = (base, altura) => {
    let aux = (base * altura) / 2;

    return aux;
}

const AREA_RETANGULO = (base, altura) => {
    let aux = base * altura;

    return aux;
}

module.exports = {
    AREA_CIRCULO,
    AREA_RETANGULO,
    AREA_TRIANGULO
};