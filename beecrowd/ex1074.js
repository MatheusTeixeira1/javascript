var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeros=lines.map(item=>Number(item))
for(i=1;i<=numeros[0];i++){
    if(numeros[i]>0){
        if(numeros[i]%2==0){
            console.log('EVEN POSITIVE')
        }else{
            console.log('ODD POSITIVE')
        }
    }else if(numeros[i]<0){
        if(numeros[i]%2==0){
            console.log('EVEN NEGATIVE')
        }else{
            console.log('ODD NEGATIVE')
        }
    }else{
        console.log('NULL')
    }
}
console.log(28%13)


// function parin(item){
//     if(Number(item)>0){
//         if(Number(item)%2==0){
//             console.log('EVEN POSITIVE')
//         }else{
//             console.log('ODD POSITIVE')
//         }
//     }else if(Number(item)<0){
//         if(Number(item)%2==0){
//             console.log('EVEN NEGATIVE')
//         }else{
//             console.log('ODD NEGATIVE')
//         }
//     }else{
//         console.log('NULL')
//numeros[i]}

// lines.map(parin)