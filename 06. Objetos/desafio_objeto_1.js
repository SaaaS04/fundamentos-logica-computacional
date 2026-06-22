// data 
// atributos: dia mês ano
// Método: exibir -> "dia/mes/ano"

const data = {
    dia: 25,
    mes: 12,
    ano: 2026,
    exibir: function(){
        console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }
}

data.exibir();