var input = require('fs').readFileSync('stdin', 'utf8');
var n=Number(input)
for(i=1;i<=10;i++){
    console.log(`${i} x ${n} = ${i*n}`)
}