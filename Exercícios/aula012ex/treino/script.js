function verificar(){
    var ntxt=document.getElementById('ntxt')
    var n=Number(ntxt.value)
    var anod= new Date()
    var ano=anod.getFullYear()
    var idade=ano-n
    var checkSEX=document.getElementsByName('checkSEX')
    var img=document.getElementById('img')
    var genero=''
    if(idade<0||idade>150){
        window.alert('idade invalida')
    }else{
        if(checkSEX[0].checked){
            genero='Homem'
            if(idade<12){
                img.src='crianca-m.png'
            }else if(idade<21){
                img.src='adolecente-m.png'
            }else if(idade<50){
                img.setAttribute('src','adulto-m.png')
            }
        }else{
            genero='Mulher'
            if(idade<12){
                img.src='crianca-f.png'
            }else if(idade<21){
                img.src='adolecente-f.png'
            }
            
        }
    }
    var res=document.getElementById('res')
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade}`
}