const rl = require('readline-sync')
let opcao = 0

do{
    console.log('|-------------------------------------------|')
    console.log('|-- 1 = Cilindro ---------------------------|')
    console.log('|-- 2 = Cone -------------------------------|')
    console.log('|-- 3 = Cubo -------------------------------|')
    console.log('|-- 0 = Sair -------------------------------|')
    console.log('|-------------------------------------------|')

    opcao = rl.questionInt(`qual a sua opção:`)

}while(opcao !== 0)

    console.log('Fim do programa')