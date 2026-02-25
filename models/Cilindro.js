class Cilindro{
    constructor(raio = 1, altura = 1){
        this.raio = raio
        this.altura = altura
    }

    calcularVolumeCil(){
    return Math.PI * this.raio * this.raio * this.altura
    }

    calcularAreaBase(){
        return math.PI * this.raio * this.raio
    }

    calcularAreaL(){
        return 2 * math.PI * this.raio * this.altura
    }
}

