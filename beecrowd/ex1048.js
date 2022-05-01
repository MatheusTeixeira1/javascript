//requisita acesso aos FileSistem
var input=require('fs').readFileSync('stdin', 'utf8')
var lines=input.split(' ')






var salario=Number(lines)
var novosalrio=0
var salarios=[2000,1200,800,400,0]
var bonus=[1.04,1.07,1.1,1.12,1.15]


for(i=0;i<5;i++){
    if(salario>salarios[i]){
    novosalrio=salario*bonus[i]
    retajusteganho=novosalrio-salario
    console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
    console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
    console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
    break;
    }
}


// if(salario<=400){
//     novosalrio=salario*1.15
//     retajusteganho=novosalrio-salario
//     console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
//     console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
//     console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
// }else if(salario>400&&salario<=800){
//     novosalrio=salario*1.12
//     retajusteganho=novosalrio-salario
//     console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
//     console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
//     console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
// }else if(salario>800&&salario<=1200){
//     novosalrio=salario*1.1
//     retajusteganho=novosalrio-salario
//     console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
//     console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
//     console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
// }else if(salario>1200&&salario<=2000){
//     novosalrio=salario*1.07
//     retajusteganho=novosalrio-salario
//     console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
//     console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
//     console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
// }else if(salario>2000){
//     novosalrio=salario*1.04
//     retajusteganho=novosalrio-salario
//     console.log(`Novo salario: ${(novosalrio.toFixed(2))}`)
//     console.log(`Reajuste ganho: ${(Math.round(retajusteganho).toFixed(2))}`)
//     console.log(`Em percentual: ${((novosalrio%salario/salario)*100).toFixed(0)} %`)
// }