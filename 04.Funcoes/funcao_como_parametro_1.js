function executar(param) {
    if (typeof param === "function") {
        console.log(param()); //<---- Ponto central
    }
}

function bomDia() {
    return ('Bom dia');
}

executar(3);
executar(bomDia); // <--- ponto central

const x = bomDia;
const y = bomDia();

console.log(x())
console.log(y)
