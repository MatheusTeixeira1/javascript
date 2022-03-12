function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.getElementById('res')
    var idade=ano-Number(fano.value)
    if(fano.value.length==0||fano.value>ano){
        window.alert('Verifique os dados')
    }else{
        var fsex=document.getElementsByName('radsex')
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade<12){
                img.setAttribute('src','crianca-m.png')
            }else if(idade<21){
                img.setAttribute('src','adolecente-m.png')
            }else if(idade<50){
                img.setAttribute('src','adulto-m.png')
            }else{
                img.setAttribute('src','idoso-m.png')
            }
        }else{
            genero='Mulher'
            if(idade<12){
                img.setAttribute('src','crianca-f.png')
            }else if(idade<21){
                img.setAttribute('src','adolecente-f.png')
            }else if(idade<50){
                img.setAttribute('src','adulto-f.png')
            }else{
                img.setAttribute('src','idoso-f.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }
}

