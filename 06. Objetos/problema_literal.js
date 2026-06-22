const d1 = {
    dia: 25,
    mes: 12,
    ano: 2026,
    exibir: function(){
        console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }
}
const d2 = {
    dia: 22,
    mes: 12,
    ano: 2023,
    exibir: function(){
        console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }
}

d1.exibir()
d2.exibir()
d2.exibir()