const cliente = {
    codigo: 1455,
    nome: 'Rebeca',
    vip: true,
    endereco: {
        logradouro: 'Rua tal',
        numero: 5555,
        complemento: 'Algum lugar',
        pontosRef: [
            {nome: 'Hospital a', proximo: true},
            {nome: 'Shopping b', proximo: false}
        ]
    },
    nomeFilhos: ['Bia', 'Julio', 'Charles']
}

console.log(cliente.nome)
console.log(cliente.codigo)
console.log(cliente.vip)
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.pontosRef[0].proximo)
