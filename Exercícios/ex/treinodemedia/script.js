var numX=document.getElementById('numX')
var lista=[]
var tabela=document.getElementById('tabela')
var res=document.getElementById('res')

function isNunber(n){
    if(n<100 && n>0){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n))==-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNunber(numX.value)&&inLista(numX.value, lista)){
        lista.push(Number(numX.value))
        var item=document.createElement('option')
        item.text=`Numero ${numX.value} registrado`
        tabela.appendChild(item)
    }else{
        window.alert('Valor invalido')
    }
}

function finalizar(){
    
    var quantidade=lista.length
    var maior=lista[0]
    var menor=lista[0]
    var soma=0
    for(i=0;i<lista.length;i++){
        soma=soma+lista[i]
        if(lista[i]>maior){
            maior=lista[i]
        }
        if(lista[i]<menor){
            menor=lista[i]
        }
    }
    var media=soma/quantidade
    res.innerHTML=`${quantidade}  ${maior}  ${menor}  ${soma}  ${media}`
}