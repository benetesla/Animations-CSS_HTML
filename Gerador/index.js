//gerar numeros aleatorias para sortear
function gerarNumerosAleatorios() {
    for (var i = 0; i < 5; i++) {
        var numero = {};
        numero.id = i;
        numero.url = "http://lorempixel.com/400/200/sports/" + i;
        numeros.push(numero);
    }
    return numeros;
}