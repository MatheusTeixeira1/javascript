function verificar(){
    var anod=new Date()
    var ano=anod.getFullYear()
    var niverd=document.getElementById('nivertxt')
    var niver=Number(niverd.value)
    var idade=ano-niver
    if(idade<0||idade>130){
        window.alert(`Um viajante no tempo? nã, você não tem ${idade}`)
    }else{
        var bisex=document.getElementsByName('rsex')
        var img=document.getElementById('img')
        var genero=''
        if(bisex[0].checked){
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
}
