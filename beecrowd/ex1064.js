var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n=lines.map(itens=>Number(itens))
var c=0
var soma=0

for(i=0;i<n.length;i++){
    if(n[i]>0){
        c++
        soma+=n[i]
    }
}
console.log(`${c} valores positivos`)
console.log(`${(soma/c)}`)