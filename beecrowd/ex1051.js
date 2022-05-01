var input = require('fs').readFileSync('stdin', 'utf8');

var salario=Number(input)
var soma=0
if(salario<=2000){
    console.log('Isento')
}else if(salario>2000&&salario<=3000){
    soma=(salario-2000)*0.08
    console.log(`R$ ${soma.toFixed(2)}`)
}else if(salario>3000&&salario<=4500){
    soma=80+((salario-3000)*0.18)
    console.log(`R$ ${soma.toFixed(2)}`)
}else if(salario>4500){
    soma=80+270+((salario-4500)*0.28)
    console.log(`R$ ${soma.toFixed(2)}`)
}