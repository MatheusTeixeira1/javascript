var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n=0
// var x=lines[2].split(' ')
// var [a,b,c]=x.map(item=>Number(item))

// console.log(c)

for(i=1;i<lines.length;i++){
    if(i>Number(lines[0])){

    }else{
        n=0
        var [a,b,c]=lines[i].split(' ')
        let cal=((Number(a)*2)+(Number(b)*3)+(Number(c)*5))/10
        let cal2=(Math.round(cal*10)/10).toFixed(1)
        console.log(cal2)
    }
}