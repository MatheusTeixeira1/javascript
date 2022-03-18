function tabuada(){
    var txtn=document.getElementById('txtn')
    var tab=document.getElementById('seltab')
    var n=Number(txtn.value)
    tab.innerHTML=''
    for(x=1;x<=10;x++){
        
        var item=document.createElement('option')
        item.text=`${n} X ${x} = ${n*x}`
        item.value=`tab${x}`
        tab.appendChild(item)
    }
}