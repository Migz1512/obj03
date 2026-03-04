class Cubo{
    constructor(aresta = 1){
        this.aresta = aresta
    }
    calcularVolumeCub(){
        return (this.aresta * this.aresta * this.aresta)
    }

    calcularAreaL(){
        return 4 * (this.aresta * this.aresta)
    }

    calcularAreaTotal(){
        return 6 * (this.aresta * this.aresta)
    }
}
module.exports = Cubo