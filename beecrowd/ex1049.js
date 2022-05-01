var input=require('fs').readFileSync('stdin', 'utf8')
var l=input.split('\n')



var [c1,c2,c3]=l

c1=c1.substring((c1.length-1),0)
c2=c2.substring((c2.length-1),0)

if(c1==='vertebrado'){
    if(c2==='ave'){
        if(c3==='carnivoro'){
            console.log('aguia')    
        }else{
            console.log('pomba')
        }
    }else{
        if(c3==='onivoro'){
            console.log('homem')
        }else{
            console.log('vaca')
        }
    }
}else{
    if(c2=='inseto'){
        if(c3=='hematofago'){
            console.log('pulga')
        }else{
            console.log('lagarta')
        }
    }else{
        if(c3=='hematofago'){
            console.log('sanguessuga')
        }else{
            console.log('minhoca')
        }
    }
}
