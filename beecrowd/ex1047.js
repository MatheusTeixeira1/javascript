//requisita acesso aos FileSistem
var input=require('fs').readFileSync('stdin', 'utf8')
var lines=input.split(' ')

var [hi,mi,hf,mf]=lines.map(item=>Number(item))
var hm1=hi*60
var hm2=hf*60
var n1=hm1+mi
var n2=hm2+mf
res=0
if(n1<n2){
    res=n2-n1
}else{
    n1=1440-n1
    res=n1+n2
}
console.log(`O JOGO DUROU ${parseInt(res/60)} HORA(S) E ${res%60} MINUTO(S)`)
