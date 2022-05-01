var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n=lines.map(itens=>Number(itens))
var maior=n[0]
var menor=n[0]
for(i=0;i<2;i++){
    if(n[i]>maior){
        maior=n[i]
    }
    if(n[i]<menor){
        menor=n[i]
    }
}
var soma=0
for(i=menor+1;i<maior;i++){
    if(i%2!==0){
        soma=soma+i
        
    }
}
console.log(soma)