var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var diaitxt=lines[0].split(' ')
var diai=Number(diaitxt[1])
var horatxti=lines[1].split(':')
var [h,m,s]=horatxti.map(item=>Number(item))
var tempoi=(diai*86400)+(h*3600)+(m*60)+s

var diaftxt=lines[2].split(' ')
var diaf=Number(diaftxt[1])
var horatxtf=lines[3].split(':')
var [hf,mf,sf]=horatxtf.map(item=>Number(item))
var tempof=(diaf*86400)+(hf*3600)+(mf*60)+sf
var duracao=tempof-tempoi

var divisor=[86400,3600,60,1]
var medi=['dia','hora','minuto','segundo',]

for(i=0;i<divisor.length;i++){
    console.log(`${parseInt(duracao/divisor[i])} ${medi[i]}(s)`)
    duracao=duracao%divisor[i]
}