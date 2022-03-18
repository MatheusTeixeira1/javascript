var ntxt= document.getElementById('ntxt')
var lista= document.getElementById('lista')
var numeros=[   ]
var res=document.getElementById('res')

function isNumero(n){
    if(Number(n)<1 || Number(n)>100){
        return false
    }else{
        return true
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n))==-1){
        return false 
    }else{
        return true
    }
}


function adicionar(){
    if(isNumero(ntxt.value) && !inLista(ntxt.value, numeros)){
        numeros.push(Number(ntxt.value))
        var item=document.createElement('option')
        item.text=`Valor ${ntxt.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('numero invalido')
    }
    ntxt.value=''
    ntxt.focus()
}
function finalizar(){
    if(numeros.length==0){
        window.alert('digite um numero')
    }else{
        var tot= numeros.length
        var maior=numeros[0]
        var menor=numeros[0]
        var media=''
        var soma=''
        for(var pos in numeros){
            var soma=Number(soma)+Number(numeros[pos])
            if(numeros[pos]>maior){
                var maior=numeros[pos]
            }
            if(numeros[pos]<menor){
                var menor=numeros[pos]
            }
        }
        var media=soma/tot
        res.innerHTML=''
        res.innerHTML=`${tot}  ${maior}  ${menor}  ${soma}  ${media}`
    }
}