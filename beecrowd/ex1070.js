var input = require('fs').readFileSync('stdin', 'utf8');

var n=Number(input)
var c=n
if(c%2==0){
        c=c+1
    }
for(i=0;i<6;i++){
    console.log(c)
    c=c+2
}