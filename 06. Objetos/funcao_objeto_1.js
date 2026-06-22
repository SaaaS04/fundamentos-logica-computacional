function criarData(dia, mes, ano) {
    return{
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            console.log(`${this.dia}/${this.mes}/${this.ano}`);
        }
    }
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2021);
const d3 = criarData(3, 11, 2014);

d1.exibir();
d2.exibir();
d3.exibir();