const rl = require('readline-sync')

const Cubo = require('./models/Cubo')
const Cilindro = require('./models/cilindro')
const Cone = require('./models/cone')

let op = 0
do{
    console.log('|-------------------------------------------|')
    console.log('|-- 1 = Cilindro ---------------------------|')
    console.log('|-- 2 = Cone     ---------------------------|')
    console.log('|-- 3 = Cubo     ---------------------------|')
    console.log('|-------------------------------------------|')
    console.log('\n')

    op = Number(rl.question(`Qual a sua opcao: `))
    console.log(op)

    if(op === 1){
    let raio = Number(rl.question('qual o valor do raio'))
    let cilindro = new Cilindro(raio)
    let altura = Number(rl.question('qual o valor da altura'))
    cilindro = new Cilindro(altura)
    let volume = cilindro.calcularVolCil()
    let base = cilindro.calcularAreaBase()
    let areaLateral = cilindro.calcularAreaL()
        
    console.log(`O volume de um cilíndro de raio ${raio} e altura ${altura} é ${volume.toFixed(3)}cm²`)
    console.log(`A base de um cilíndro de raio ${raio} e altura ${altura} é ${base.toFixed(3)}cm²`)
    console.log(`A área lateral de um cilíndro de raio ${raio} e altura ${altura} é ${areaLateral.toFixed(3)}cm²`)
    }else if(op === 2){

        let raio = Number(rl.question('qual o valor do raio'))
        let cone = new Cone(raio)
        let altura = Number(rl.question('qual o valor da altura'))
        cone = new Cone(altura)
        let volume = cone.calcularVolumeCon()
        let areaLateral = cone.calcularAreaL()
        let areaBase = cone.calcularAreaBase()

        console.log(`O volume de um cone de raio ${raio} e altura ${altura} é ${volume.toFixed(3)}cm²`)
        console.log(`A base de um cone de raio ${raio} e altura ${altura} é ${areaBase.toFixed(3)}cm²`)
        console.log(`A área lateral de um cone de raio ${raio} e altura ${altura} é ${areaLateral.toFixed(3)}cm²`)

    }else if(op === 3){
        let aresta = Number(rl.question('Qual o valor da aresta;'))
        let cubo = new Cubo(aresta)
        let areaLateral = cubo.calcularAreaL()
        let areaTotal = cubo.calcularAreaTotal()
        let volume = cubo.calcularVolumeCub()

        console.log(`A aréa lateral do cubo de aresta ${aresta} é ${areaLateral}cm²`)
        console.log(`A aréa Total do cubo de aresta ${aresta} é ${areaTotal}cm²`)
        console.log(`O volume do cubo de aresta ${aresta} é ${volume}cm²`)

    }else{
        console.log(' Opção Inválida! Digite Novamente!')
    }

    
        
}while(op !== 0)
    console.log('Fim do programa')