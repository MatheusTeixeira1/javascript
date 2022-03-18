var d=new Date()
var dia=d.getDay()
var nascd='2000'
var nasc=Number(nascd)
var a=new Date()
var ano=a.getFullYear()
var idade=ano-nasc
console.log(idade)

switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}
