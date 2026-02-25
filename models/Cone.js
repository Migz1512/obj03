class Cone{
    constructor(raio = 1, altura = 1, geratriz = 1){
        this.raio = raio
        this.altura = altura
        this.geratriz = geratriz
    }
    calcularVolumeCon(){
        return (1 / 3) * Math.PI * this.raio * this.raio * this.altura
        
    }
    calcularAreaL(){
        return math.PI * this.raio * this.geratriz
    }
    calcularAreaBase(){
        return math.PI * this.raio * this.raio
    }
}