function executar(fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function media(a, b) {
    return (a + b) / 2;
}

executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
executar(dividir, 90, 50);
executar(media, 90, 50);