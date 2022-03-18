var ntxt=document.getElementById('ntxt')
var res=document.getElementById('res')
var tabela=document.getElementById('tabela')
var lista=[]

function isNumber(n){
    if(Number(n)<1||Number(n)>100){
        return false
    }else{
        return true
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
    if(isNumber(ntxt.value)&& inLista(ntxt.value, lista)){
        lista.push(Number(ntxt.value))
        var item=document.createElement('option')
        item.text=`Valor ${ntxt.value} adicionado`
        tabela.appendChild(item)
    }else{
        window.alert('invalido')
    }
    ntxt.value=''
    ntxt.focus()
}

function finalizar(){
    var total =lista.length
    var maior =lista[0]
    var menor =lista[0]
    var soma=''
    var media=''
    for(var num in lista){
        
        var soma=Number(soma)+Number(lista[num])
        if(maior<lista[num]){
            var maior=lista[num]
        }
        if(menor>lista[num]){
            var menor=lista[num]
        }
    }
    var media =soma/total
    res.innerHTML=`${total}  ${maior}  ${menor}  ${soma}  ${media}`
}