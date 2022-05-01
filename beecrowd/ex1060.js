var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n=lines.map(item=>Number(item))
var posi=0
for(i=0;i<n.length;i++){
    if(n[i]>0){
        posi++
    }
}
console.log(`${posi} valores positivos`)