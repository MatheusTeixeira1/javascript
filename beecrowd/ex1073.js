var input = require('fs').readFileSync('stdin', 'utf8');

var n=Number(input)
var pares=[]
for(i=2;i<=n;i++){
    if(i%2===0){
        pares.push(i)
        console.log(`${i}^2 = ${i*i}`)
    }  
}
