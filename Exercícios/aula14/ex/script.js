var n1=document.getElementById('n1')
var nf=document.getElementById('nf')
var np=document.getElementById('np')
var res=document.getElementById('res')

function contar(){
    if(n1.value.length==0||nf.value.length==0||np.value.length==0){
        window.alert('Valores invalidos')
    }else{
        var i=Number(n1.value)
        var f=Number(nf.value)
        var p=Number(np.value)
        if(p==0){
            window.alert('Passo invalido, considerando como 1')
            p=1
        }
        if(i<f){
            res.innerHTML=''
            while(i<f){
                i=i+p
                res.innerHTML+=`${i} `
                /*for(var c=i; c<=f; c=c+p{
                        res.innertHTML+='c'
                }) */
            }   
        }else{
            res.innerHTML=''
            while(i>f){
                i=i-p
                res.innerHTML+=`${i} `
            }
        }
        
    }
    
}
