function retornaUmaFuncao() {

    function bomDia() {
        return "Boom dia!!";
    }
    return bomDia();
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());

const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao);

