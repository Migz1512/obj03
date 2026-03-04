class Cilindro{
    constructor(raio = 1, altura = 1){
        this.raio = raio
        this.altura = altura
    }

    calcularVolCil(){
    return Math.PI * this.raio * this.raio * this.altura
    }

    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }

    calcularAreaL(){
        return 2 * Math.PI * this.raio * this.altura
    }
}
module.exports = Cilindro
