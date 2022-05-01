var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var par=0
var impar=0
var posi=0
var nega=0
console.log(lines.length)

for(i=0;i<lines.length;i++){
    n=Number(lines[i])
    if(n>0){
        posi++
        if(n%2===0){
            par++
        }else{
            impar++
        }
    }else if(n<0){
        nega++
        if((-1*n)%2===0){
            par++
        }else{
            impar++
        }
    }else{
        par++
    }
}
console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${posi} valor(es) positivo(s)`)
console.log(`${nega} valor(es) negativo(s)`)

