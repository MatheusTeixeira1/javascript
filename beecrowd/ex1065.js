var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// var n=lines.map(itens=>Number(itens))

// var n=[]
// for(i=0;i<lines.length;i++){
//     n.push(Number(lines[i]))
// }

var c=0
var n=0
for(i=0;i<lines.length;i++){
    n=Number(lines[i])
    if(n%2===0){
       c++ 
    }    
}
console.log(`${c} valores pares`)