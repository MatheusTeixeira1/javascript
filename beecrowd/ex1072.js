var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n=lines.map(itens=>Number(itens))
var c1=0
var c2=0
for(i=1;i<=n[0];i++){
    if(n[i]>=10&&n[i]<=20){
        c1++
    }else{
        c2++
        
    }
}
console.log(c1 + ' in')
console.log(c2 + ' out')